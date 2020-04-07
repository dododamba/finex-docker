
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

import com.technomegapartners.finex.dao.FichierDAO;
import com.technomegapartners.finex.model.Fichier;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class FichierRestController {

	private FichierDAO entityDAO;

	@Autowired
	public FichierRestController(FichierDAO entityDAO) {
		this.entityDAO = entityDAO;
	}

	@GetMapping("/api/fichier")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Fichier> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/fichier/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<Fichier> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}

	@PostMapping("/api/fichier")
	public ResponseEntity<?> create(@Valid @RequestBody Fichier entity) {
		if (entity.getId() != null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item existe déjà !", null));
		}
		entity.setSlug(Slugger.createSlug(entity.getNom()));
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());
		entityDAO.store(entity);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", entity));
	}

	@PutMapping("/api/fichier")
	public ResponseEntity<?> set(@Valid @RequestBody Fichier entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@PutMapping("/api/fichier/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody Fichier entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/fichier/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		/*
		 * if (entityDAO.show(slug).isPresent()) { return ResponseEntity.ok(new
		 * JsonObjectResponse(false, "La entity n'existe pas !", null)); }
		 */
		Optional<Fichier> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}

}
