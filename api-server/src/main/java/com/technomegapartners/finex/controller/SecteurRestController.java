
/**
 *
 */
package com.technomegapartners.finex.controller;

import java.util.*;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.technomegapartners.finex.dao.SecteurDAO;
import com.technomegapartners.finex.model.Secteur;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class SecteurRestController {

	private SecteurDAO entityDAO;

	@Autowired
	public SecteurRestController(SecteurDAO entityDAO) {
		this.entityDAO = entityDAO;
	}

	@GetMapping("/api/secteur")
	public ResponseEntity<?> fecth(@RequestParam  int page) {
        PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Secteur> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/secteur/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<Secteur> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}



	@PostMapping("/api/secteur")
	public ResponseEntity<?> create(@Valid @RequestBody Secteur entity) {
		if (entity.getId() != null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item existe déjà !", null));
		}
		entity.setSlug(Slugger.createSlug(entity.getNom()));
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());
		entityDAO.store(entity);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", entity));
	}

	@PutMapping("/api/secteur")
	public ResponseEntity<?> set(@Valid @RequestBody Secteur entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@PutMapping("/api/secteur/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody Secteur entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/secteur/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		/*if (entityDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La entity n'existe pas !", null));
		}*/
		Optional<Secteur> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}


}