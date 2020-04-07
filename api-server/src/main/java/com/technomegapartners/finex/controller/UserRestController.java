/**
 * 
 */
package com.technomegapartners.finex.controller;

import java.util.*;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.technomegapartners.finex.dao.EmployeDao;
import com.technomegapartners.finex.dao.RoleDAO;
import com.technomegapartners.finex.dao.UserDAO;
import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.Role;
import com.technomegapartners.finex.model.User;
import com.technomegapartners.finex.request.CreateUserRequest;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */

@RestController
public class UserRestController {
	private UserDAO userDAO;
	private RoleDAO roleDAO;
	private PasswordEncoder encoder;
	private EmployeDao employeDAO;

	@Autowired
	public UserRestController(UserDAO userDAO, EmployeDao employeDAO, RoleDAO roleDAO, PasswordEncoder encoder) {
		this.userDAO = userDAO;
		this.roleDAO = roleDAO;
		this.userDAO = userDAO;
		this.encoder = encoder;
		this.employeDAO = employeDAO;

	}

	@GetMapping("/api/user")
	public ResponseEntity<?> fecth() {
		Collection<User> users = userDAO.all();
		if (users.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste user vide", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("users", users);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des users", map));
	}

	@PostMapping("/api/user")
	public ResponseEntity<?> create(@Valid @RequestBody User user) {
		if (user.getId() != null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La user existe !", null));
		}
		userDAO.store(user);
		return ResponseEntity.ok(new JsonObjectResponse(true, "User crée avec succès !", null));
	}

	@PutMapping("/api/user")
	public ResponseEntity<?> set(@Valid @RequestBody User user) {
		if (user.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La user n'existe pas !", null));
		}
		userDAO.update(user);
		Map<String, Object> map = new HashMap<>();
		map.put("user", user);
		return ResponseEntity.ok(new JsonObjectResponse(false, "User mise à jours avec succès", map));
	}

	@PutMapping("/api/user/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody User user) {
		if (user.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La user n'existe pas !", null));
		}
		userDAO.delete(user);
		Map<String, Object> map = new HashMap<>();
		map.put("user", user);
		return ResponseEntity.ok(new JsonObjectResponse(false, "User supprimé avec succès", map));
	}

	@PostMapping("/api/user/add-account")
	public ResponseEntity<?> addUserAccount(@Valid @RequestBody CreateUserRequest request) {
		Role roleName = new Role();
		Employe employe = employeDAO.showBySlug(request.getEmployeSlug());
		Optional<Role> role = roleDAO.showByNom(request.getRole());
		roleName = role.get();

		String password = encoder.encode("tmp@finex2020");
		User user = new User(employe.getNom() + " " + employe.getPrenom(), "avatar.jpg", request.getEmail(), password,
				Slugger.createSlug("user-" + employe.getNom() + "" + employe.getPrenom()));

		user.setRoles(Collections.singleton(roleName));

		employe.setUser(user);
		userDAO.store(user);
		employeDAO.update(employe);
		HashMap<String, Object> objMap = new HashMap<String, Object>();
		objMap.put("employe", employe);

		return ResponseEntity.ok(new JsonObjectResponse(true, "employé ajouté avec succès", objMap));

	}

	@PostMapping("/api/user/show")
	public ResponseEntity<?> select(@Valid @RequestBody String slug) {
		if (userDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La user n'existe pas !", null));
		}
		Optional<User> user = userDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("user", user);
		return ResponseEntity.ok(new JsonObjectResponse(false, "User mise à jours avec succès", map));
	}

}
