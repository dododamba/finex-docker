/**
 * 
 */
package com.technomegapartners.finex.controller;

import java.util.*;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import com.technomegapartners.finex.dao.DirectionDAO;
import com.technomegapartners.finex.dao.EmployeDao;
import com.technomegapartners.finex.dao.RoleDAO;
import com.technomegapartners.finex.dao.UserDAO;
import com.technomegapartners.finex.model.Direction;
import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.User;
import com.technomegapartners.finex.request.CreateEmployeRequest;
import com.technomegapartners.finex.request.SlugRequest;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })
public class EmployeRESTController {

	private DirectionDAO directionDAO;
	private EmployeDao employeDAO;
	private UserDAO userDAO;

	@Autowired
	public EmployeRESTController(DirectionDAO directionDAO, EmployeDao employeDAO, RoleDAO roleDAO, UserDAO userDAO,
			PasswordEncoder encoder) {
		this.directionDAO = directionDAO;
		this.employeDAO = employeDAO;
		this.userDAO= userDAO;

	}

	@PostMapping("/api/employe")
	public ResponseEntity<?> create(@Valid @RequestBody CreateEmployeRequest request) {

		Optional<Direction> direction = directionDAO.show(request.getDirectionSlug());
		Direction castedDirection = direction.get();

		Employe employe = request.getEmploye();
		employe.setDirection(castedDirection);
		employe.setSlug(Slugger.createSlug(employe.getNom() + "-" + employe.getPrenom()));
		employe.setCreatedAt(new Date());
		employe.setUpdatedAt(new Date());
		HashMap<String, Object> objMap = new HashMap<String, Object>();
		objMap.put("employe", employe);
		employeDAO.store(employe);
		return ResponseEntity.ok(new JsonObjectResponse(true, "employé ajouté avec succès", objMap));
	}

	@GetMapping("/api/employe")
	public ResponseEntity<?> fecth() {
		Collection<Employe> employes = employeDAO.all();
		if (employes.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste employe vide", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("employes", employes);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des employes", map));
	}

	@GetMapping("/api/employe/without-account")
	public ResponseEntity<?> fecthNoAccount() {
		Collection<Employe> employes = employeDAO.doNotHaveUserAccount();

		Map<String, Object> map = new HashMap<>();
		map.put("employes", employes);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des employes", map));
	}

	@PutMapping("/api/employe")
	public ResponseEntity<?> set(@Valid @RequestBody Employe employe) {
		if (employe.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La employe n'existe pas !", null));
		}
		employeDAO.update(employe);
		Map<String, Object> map = new HashMap<>();
		map.put("employe", employe);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Employe mise à jours avec succès", map));
	}

	@PutMapping("/employe/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody Employe employe) {
		if (employe.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La employe n'existe pas !", null));
		}
		employeDAO.delete(employe);
		Map<String, Object> map = new HashMap<>();
		map.put("employe", employe);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Employe supprimé avec succès", map));
	}

	@PostMapping("/api/employe/show")
	
	public ResponseEntity<?> select(@Valid @RequestBody SlugRequest slug) {
		if (!employeDAO.show(slug.getSlug()).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La employe n'existe pas !", null));
		}
		Optional<Employe> employe = employeDAO.show(slug.getSlug());
		Map<String, Object> map = new HashMap<>();
		map.put("employe", employe);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Employe mise à jours avec succès", map));
	}
	
   @GetMapping("/api/employe/show-by-user")
	public ResponseEntity<?> getByUser(@Valid @RequestParam String slug) {
		if (!userDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le compte n'existe pas !", null));
		}
		User user = userDAO.show(slug).get();
		
		Optional<Employe> employe = employeDAO.getEmployeByUserAccount(user);
		Map<String, Object> map = new HashMap<>();
		map.put("employe", employe);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Employe mise à jours avec succès", map));
	}

}
