/**
 * 
 */
package com.technomegapartners.finex.controller;

import java.util.*;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.technomegapartners.finex.dao.PartenaireDAO;
import com.technomegapartners.finex.dao.ProjetDAO;
import com.technomegapartners.finex.dao.TypePartenaireDAO;
import com.technomegapartners.finex.model.Partenaire;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.model.TypePartenaire;
import com.technomegapartners.finex.request.PartenaireCreateFromSelectRequest;
import com.technomegapartners.finex.request.PartenaireCreateRequest;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class PartenaireRestController {

	private PartenaireDAO partenaireDAO;
	private TypePartenaireDAO typePartenaireDAO;
	private ProjetDAO projetDAO;

	@Autowired
	public PartenaireRestController(PartenaireDAO partenaireDAO,
			com.technomegapartners.finex.dao.TypePartenaireDAO typePartenaireDAO,ProjetDAO projetDAO) {
		this.partenaireDAO = partenaireDAO;
		this.typePartenaireDAO = typePartenaireDAO;
		this.projetDAO = projetDAO;
	}

	@GetMapping("/api/partenaire")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Partenaire> partenaires = partenaireDAO.all(pageable);

		if (partenaires.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste partenaire vide", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("partenaires", partenaires);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des partenaires", map));
	}

	@GetMapping("/api/partenaire/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<Partenaire> partenaires = partenaireDAO.allWithoutPagination();

		if (partenaires.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste partenaire vide", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("partenaires", partenaires);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des partenaires", map));
	}

	@PostMapping("/api/partenaire")
	public ResponseEntity<?> create(@RequestBody PartenaireCreateRequest request) {

		TypePartenaire typePartenaire = typePartenaireDAO.show(request.getTypePartenaireSlug()).get();

		Partenaire partenaire = new Partenaire();
		partenaire.setTypePartenaire(typePartenaire);
		partenaire.setNom(request.getNom());
		partenaire.setSlug(Slugger.createSlug(partenaire.getNom()));
		partenaire.setCreatedAt(new Date());
		partenaire.setUpdatedAt(new Date());
		partenaireDAO.store(partenaire);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Partenaire crée avec succès !", partenaire));
	}
	
	
	@PostMapping("/api/partenaire/from-select")
	public ResponseEntity<?> createFromSelect(@RequestBody PartenaireCreateFromSelectRequest request) {

		Projet projet = projetDAO.show(request.getProjet()).get();
		Collection<Partenaire> partenaires = new ArrayList<Partenaire>();
		
		for(String partenaireSlug: request.getPartenaire()) {
			Partenaire partenaire = partenaireDAO.show(partenaireSlug).get();
			partenaires.add(partenaire);
		}
		
		projet.getPartenaires().addAll(partenaires);
		projetDAO.update(projet);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Partenaire crée avec succès !", projet));
	}
	
	
	

	@PutMapping("/api/partenaire")
	public ResponseEntity<?> set(@Valid @RequestBody Partenaire partenaire) {
		if (partenaire.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La partenaire n'existe pas !", null));
		}
		partenaireDAO.update(partenaire);
		Map<String, Object> map = new HashMap<>();
		map.put("partenaire", partenaire);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Partenaire mise à jours avec succès", map));
	}

	@PutMapping("/api/partenaire/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody String slug) {
		Partenaire partenaire = partenaireDAO.show(slug).get();
		partenaireDAO.delete(partenaire);
		Map<String, Object> map = new HashMap<>();
		map.put("partenaire", partenaire);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Partenaire supprimé avec succès", map));
	}

	@PostMapping("/api/partenaire/show")
	public ResponseEntity<?> select(@Valid @RequestBody String slug) {
		if (partenaireDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La partenaire n'existe pas !", null));
		}
		Optional<Partenaire> partenaire = partenaireDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("partenaire", partenaire);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Partenaire mise à jours avec succès", map));
	}

}
