
/**
 *
 */
package com.technomegapartners.finex.controller;

import java.util.*;

import javax.validation.Valid;
import com.technomegapartners.finex.request.CreateRegionRequest;
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

import com.technomegapartners.finex.dao.RegionDAO;
import com.technomegapartners.finex.model.Region;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class RegionRestController {

	private RegionDAO entityDAO;

	@Autowired
	public RegionRestController(RegionDAO entityDAO) {
		this.entityDAO = entityDAO;
	}

	@GetMapping("/api/region")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Region> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("regions", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/region/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<Region> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("regions", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}

	@PostMapping("/api/region")
	public ResponseEntity<?> create(@Valid @RequestBody CreateRegionRequest request) {

		Region entity = new Region();

	
		entity.setNom(request.getNom());
		entity.setDescription(request.getDescription());
		entity.setSlug(Slugger.createSlug(entity.getNom()));
        entity.setCheflieux(request.getCheflieux());
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());

		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);

		entityDAO.store(entity);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", map));
	}

	@PutMapping("/api/region")
	public ResponseEntity<?> set(@Valid @RequestBody Region entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);

		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@GetMapping("/api/region/delete")
	public ResponseEntity<?> drop(@RequestParam String slug) {
		if (!entityDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		Region entity = entityDAO.show(slug).get();
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/region/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		/*
		 * if (entityDAO.show(slug).isPresent()) { return ResponseEntity.ok(new
		 * JsonObjectResponse(false, "La entity n'existe pas !", null)); }
		 */
		Optional<Region> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}



}