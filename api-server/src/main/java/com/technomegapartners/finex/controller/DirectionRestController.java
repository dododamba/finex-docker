/**
 * 
 */
package com.technomegapartners.finex.controller;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technomegapartners.finex.dao.DirectionDAO;
import com.technomegapartners.finex.dao.EmployeDao;
import com.technomegapartners.finex.dao.InstitutionDAO;
import com.technomegapartners.finex.dao.RoleDAO;
import com.technomegapartners.finex.dao.UserDAO;
import com.technomegapartners.finex.model.Direction;
import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.Institution;
import com.technomegapartners.finex.model.User;
import com.technomegapartners.finex.request.CreateDirectionRequest;
import com.technomegapartners.finex.request.SlugRequest;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping("/api/")
public class DirectionRestController {

	private UserDAO userDAO;
	private RoleDAO roleDAO;
	private PasswordEncoder encoder;
	private EmployeDao employeDAO;
	private DirectionDAO directionDAO;
	private InstitutionDAO institutionDAO;

	@Autowired
	public DirectionRestController(UserDAO userDAO, RoleDAO roleDAO, PasswordEncoder encoder, EmployeDao employeDAO,
			DirectionDAO directionDAO, InstitutionDAO institutionDAO) {
		this.userDAO = userDAO;
		this.roleDAO = roleDAO;
		this.encoder = encoder;
		this.employeDAO = employeDAO;
		this.directionDAO = directionDAO;
		this.institutionDAO = institutionDAO;
	}

	@GetMapping("/direction")
	public ResponseEntity<?> fecth() {
		Collection<Direction> directions = directionDAO.all();
		if (directions.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste direction vide", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("directions", directions);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des directions", map));
	}

	@PostMapping("/direction")
	public ResponseEntity<?> create(@Valid @RequestBody CreateDirectionRequest request) {
		Collection<Direction> existDirection = new ArrayList<>();
		Direction direction = new Direction();
		Institution institution = new Institution();

		if (directionDAO.getByLibelle(request.getNom()) != null) {
			existDirection = directionDAO.getByLibelle(request.getNom());
			for (Direction direction1 : existDirection) {
				if (direction1.getInstitution() != null) {
					return ResponseEntity.ok(new JsonObjectResponse(true, "La direction existe déja ", direction1));
				}
			}
		}

		institution = institutionDAO.show(request.getInstitution()).get();

		direction.setLibelle(request.getNom());
		direction.setDescription(request.getDescription());
		direction.setCreatedAt(new Date());
		direction.setUpdatedAt(new Date());
		direction.setSlug(request.getNom());
		direction.setInstitution(institution);

		
		Employe employe = new Employe(request.getNomEmploye(), request.getPrenomEmploye(), null, null, null, null,
				direction, Slugger.createSlug(request.getNom()));
		
		employe.setCreatedAt(new Date());
		employe.setUpdatedAt(new Date());
		
		
		User user = new User("username-" + request.getNomEmploye(), "avatar.png", request.getEmailEmploye(),
				encoder.encode("tmp@finex2020"), Slugger.createSlug(request.getNom()));
		user.setCreatedAt(Instant.now());
		user.setUpdatedAt(Instant.now());
		employe.setUser(user);
		
		userDAO.store(user);
		directionDAO.store(direction);
		employeDAO.store(employe);
		
		direction.setResponsable(employe);
		directionDAO.update(direction);
		Map<String, Object> map = new HashMap<>();
		
		
		map.put("direction", direction);
		map.put("user", user);
		map.put("employe", employe);

		
		// directionDAO.store(direction);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Direction crée avec succès !", map));
	}

	@PutMapping("/direction")
	public ResponseEntity<?> set(@Valid @RequestBody Direction direction) {
		if (direction.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La direction n'existe pas !", null));
		}
		directionDAO.update(direction);
		Map<String, Object> map = new HashMap<>();
		map.put("direction", direction);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Direction mise à jours avec succès", map));
	}

	@PutMapping("/direction/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody Direction direction) {
		if (direction.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La direction n'existe pas !", null));
		}
		directionDAO.delete(direction);
		Map<String, Object> map = new HashMap<>();
		map.put("direction", direction);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Direction supprimé avec succès", map));
	}

	@PostMapping("/direction/show")
	public ResponseEntity<?> select(@Valid @RequestBody SlugRequest slug) {
		if (!directionDAO.show(slug.getSlug()).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La direction n'existe pas !", null));
		}
		Optional<Direction> direction = directionDAO.show(slug.getSlug());
		Map<String, Object> map = new HashMap<>();
		map.put("direction", direction);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Direction", map));
	}

}
