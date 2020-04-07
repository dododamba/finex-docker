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

import com.technomegapartners.finex.dao.InstitutionDAO;
import com.technomegapartners.finex.dao.MaitreDouvrageDAO;
import com.technomegapartners.finex.model.Institution;
import com.technomegapartners.finex.model.MaitreDouvrage;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class InstitutionRestController {

	private InstitutionDAO entityDAO;
	private MaitreDouvrageDAO maitreDouvrageDAO;

	@Autowired
	public InstitutionRestController(InstitutionDAO entityDAO, MaitreDouvrageDAO maitreDouvrageDAO) {
		this.entityDAO = entityDAO;
		this.maitreDouvrageDAO = maitreDouvrageDAO;
	}

	@GetMapping("/api/institution")
	public ResponseEntity<?> fecth(@RequestParam  int page) {
        PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Institution> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/institution/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<Institution> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}



	@PostMapping("/api/institution")
	public ResponseEntity<?> create(@Valid @RequestBody Institution entity) {
		
		entity.setSlug(Slugger.createSlug(entity.getNom()));
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());
		entityDAO.store(entity);
		
		if (!maitreDouvrageDAO.show(entity.getNom()).isPresent()) {

			MaitreDouvrage maitreDouvrage = new MaitreDouvrage();
			maitreDouvrage.setNom(entity.getNom());
			maitreDouvrage.setDescription(entity.getDescription());
			maitreDouvrage.setCreatedAt(new Date());
			maitreDouvrage.setUpdatedAt(new Date());
			maitreDouvrage.setSlug(Slugger.createSlug("maitre-doeuvrage" + entity.getNom()));
			maitreDouvrage.setInstitution(entity);
			maitreDouvrageDAO.store(maitreDouvrage);
		} 
		
		
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", entity));
	}

	@PutMapping("/api/institution")
	public ResponseEntity<?> set(@Valid @RequestBody Institution entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@PutMapping("/api/institution/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody Institution entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/institution/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		/*if (entityDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La entity n'existe pas !", null));
		}*/
		Optional<Institution> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}


}
