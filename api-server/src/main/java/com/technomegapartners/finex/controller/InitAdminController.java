/**
 * 
 */
package com.technomegapartners.finex.controller;

import java.time.Instant;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technomegapartners.finex.dao.DirectionDAO;
import com.technomegapartners.finex.dao.EmployeDao;
import com.technomegapartners.finex.dao.InstitutionDAO;
import com.technomegapartners.finex.dao.RoleDAO;
import com.technomegapartners.finex.dao.TypePartenaireDAO;
import com.technomegapartners.finex.dao.UserDAO;
import com.technomegapartners.finex.model.Direction;
import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.Institution;
import com.technomegapartners.finex.model.Role;
import com.technomegapartners.finex.model.TypePartenaire;
import com.technomegapartners.finex.model.User;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class InitAdminController {
	private TypePartenaireDAO typePartenaireDAO;
	private UserDAO userDAO;
	private RoleDAO roleDAO;
	private PasswordEncoder encoder;
	private EmployeDao employeDAO;
	private DirectionDAO directionDAO;
    private InstitutionDAO institutionDAO;
	@Autowired
	public InitAdminController(TypePartenaireDAO typePartenaireDAO, UserDAO userDAO, RoleDAO roleDAO,
			PasswordEncoder encoder, EmployeDao employeDAO, DirectionDAO directionDAO,InstitutionDAO institutionDAO) {
		this.typePartenaireDAO = typePartenaireDAO;
		this.userDAO = userDAO;
		this.roleDAO = roleDAO;
		this.encoder = encoder;
		this.employeDAO = employeDAO;
		this.directionDAO = directionDAO;
		this.institutionDAO = institutionDAO;
	}

	@GetMapping("/api/init-admin")
	public ResponseEntity<?> init() {
		Date createdAt = new Date();
		Date updatedAt = new Date();
		Instant instant = Instant.now();

		Employe employe1 = new Employe("Tom", "Doe", "MAT02", new Date(), new Date(), 200000.0, null,
				Slugger.createSlug("tom" + "-" + "doe"));
		employe1.setCreatedAt(createdAt);

		Institution institution = new Institution("Ministère de l'économie", "Lorem Ipsum", employe1,
				Slugger.createSlug("ministere de l'economie"), createdAt, updatedAt, null);
		Direction direction = new Direction("Direction des services Informatiques", "Lorem ipusm", null,
				Slugger.createSlug("direction-01"));
		direction.setInstitution(institution);
		direction.setCreatedAt(createdAt);
		direction.setUpdatedAt(updatedAt);

		Employe employe = new Employe("Takezo", "Sensei", "MAT01", new Date(), new Date(), 200000.0, direction,
				Slugger.createSlug("takezo" + "-" + "sensei"));
		employe.setCreatedAt(createdAt);
		employe.setUpdatedAt(updatedAt);
		User user = new User("takezo", "avatar.png", "sensei@tmp.io", Slugger.createSlug("sensei"));
		user.setCreatedAt(instant);
		user.setUpdatedAt(instant);
		Role role = new Role("Administrateur", Slugger.createSlug("admin"));
		role.setCreatedAt(createdAt);
		role.setUpdatedAt(updatedAt);

		TypePartenaire typePartenaire1 = new TypePartenaire("Banque", "Cette categorie regroupe les banque",
				Slugger.createSlug("banque"));
		typePartenaire1.setCreatedAt(createdAt);
		typePartenaire1.setUpdatedAt(updatedAt);

		TypePartenaire typePartenaire2 = new TypePartenaire("Etat", "Cette categorie regroupe les etats partenaires",
				Slugger.createSlug("etat"));
		typePartenaire2.setCreatedAt(createdAt);
		typePartenaire2.setUpdatedAt(updatedAt);
		TypePartenaire typePartenaire3 = new TypePartenaire("Organisation",
				"Cette categorie regroupe les organisations partenaire", Slugger.createSlug("organisation"));
		typePartenaire3.setCreatedAt(createdAt);
		typePartenaire3.setUpdatedAt(updatedAt);
		TypePartenaire typePartenaire4 = new TypePartenaire("Particulier",
				"Cette categorie regroupe les personnes morales créanciers de l'Etats",
				Slugger.createSlug("particulier"));
		typePartenaire4.setCreatedAt(createdAt);
		typePartenaire4.setUpdatedAt(updatedAt);

		employe.setUser(user);
		String password = encoder.encode("tmp@finex2020");
		user.setRoles(Collections.singleton(role));
		user.setPassword(password);

		Map<String, Object> map = new HashMap<>();
		map.put("employe", employe);
		map.put("type-partenaire-1", typePartenaire1);
		map.put("type-partenaire-2", typePartenaire2);
		map.put("type-partenaire-3", typePartenaire3);
		map.put("type-partenaire-4", typePartenaire4);

		typePartenaireDAO.store(typePartenaire1);
		typePartenaireDAO.store(typePartenaire2);
		typePartenaireDAO.store(typePartenaire3);
		typePartenaireDAO.store(typePartenaire4);
 
		roleDAO.store(role);
		employeDAO.store(employe1);
        institutionDAO.store(institution);
		directionDAO.store(direction);
		userDAO.store(user);
		employeDAO.store(employe);

		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des partenaires", map));
	}

}
