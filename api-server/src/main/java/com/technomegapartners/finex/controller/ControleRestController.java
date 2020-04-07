package com.technomegapartners.finex.controller;

import java.util.*;

import javax.validation.Valid;
import com.technomegapartners.finex.request.CreateControleRequest;
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

import com.technomegapartners.finex.dao.ControleDAO;
import com.technomegapartners.finex.dao.ProjetControlleurDAO;
import com.technomegapartners.finex.dao.ProjetDAO;
import com.technomegapartners.finex.model.Controle;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.model.ProjetControlleur;
import com.technomegapartners.finex.model.TypeControle;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;
import com.technomegapartners.finex.util.StringToDateConverter;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class ControleRestController {

	private ControleDAO entityDAO;
	private ProjetControlleurDAO projetControlleurDAO;
	private ProjetDAO projetDAO;

	@Autowired
	public ControleRestController(ControleDAO entityDAO, ProjetControlleurDAO projetControlleurDAO,
			ProjetDAO projetDAO) {
		this.entityDAO = entityDAO;
		this.projetControlleurDAO = projetControlleurDAO;
		this.projetDAO = projetDAO;
	}

	@GetMapping("/api/control")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Controle> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("controls", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/control/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<Controle> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("controls", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}

	@PostMapping("/api/control")
	public ResponseEntity<?> create(@Valid @RequestBody CreateControleRequest request) {

		Controle entity = new Controle();
		ProjetControlleur projetControlleur = new ProjetControlleur();
		Projet projet = projetDAO.show(request.getProjet()).get();

		if (projetControlleurDAO.show(request.getControlleur()).isPresent()) {
			projetControlleur = projetControlleurDAO.show(request.getControlleur()).get();
		} else {
			projetControlleur.setNom(request.getControlleur());
			projetControlleur.setCreatedAt(new Date());
			projetControlleur.setUpdatedAt(new Date());
			projetControlleur.setSlug(Slugger.createSlug(projetControlleur.getNom()));
			projetControlleurDAO.store(projetControlleur);
		}

		if (request.getTypeControle() == 1) {
			entity.setTypeControle(TypeControle.CONTROLE_SUR_PIECE);
		}else {
			entity.setTypeControle(TypeControle.CONTROLE_SUR_PLACE);

		}
		entity.setLibelle(request.getLibelle());
		entity.setDecription(request.getDecription());
		entity.setDateControle( StringToDateConverter.convert(request.getDateControle()));
		entity.setControlleur(projetControlleur);
		entity.setProjet(projet);
		entity.setSlug(Slugger.createSlug(entity.getLibelle()));

		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());

		// entityDAO.store(entity);

		Map<String, Object> map = new HashMap<>();
		map.put("controle", entity);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", map));
	}

	@PutMapping("/api/control")
	public ResponseEntity<?> set(@Valid @RequestBody Controle entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);

		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@GetMapping("/api/control/delete")
	public ResponseEntity<?> drop(@RequestParam String slug) {
		if (!entityDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		Controle entity = entityDAO.show(slug).get();
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/control/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		/*
		 * if (entityDAO.show(slug).isPresent()) { return ResponseEntity.ok(new
		 * JsonObjectResponse(false, "La entity n'existe pas !", null)); }
		 */
		Optional<Controle> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}

}
