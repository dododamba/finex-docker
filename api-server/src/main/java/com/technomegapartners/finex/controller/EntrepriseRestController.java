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

import com.technomegapartners.finex.dao.EntrepriseDAO;
import com.technomegapartners.finex.dao.ProjetDAO;
import com.technomegapartners.finex.model.Entreprise;
import com.technomegapartners.finex.model.InformationBanquaire;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.repository.InformationBanquaireRepository;
import com.technomegapartners.finex.request.EntrepriseCreateRequest;
import com.technomegapartners.finex.request.EntrepriseFromCreateRequest;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;


/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class EntrepriseRestController {

	private EntrepriseDAO entityDAO;
	private InformationBanquaireRepository infoBanquaireRepository;
	private ProjetDAO projetDAO;	
	
	@Autowired
	public EntrepriseRestController(EntrepriseDAO entityDAO, InformationBanquaireRepository infoBanquaireRepository,
			ProjetDAO projetDAO) {
		super();
		this.entityDAO = entityDAO;
		this.infoBanquaireRepository = infoBanquaireRepository;
		this.projetDAO = projetDAO;
	}

	@GetMapping("/api/entreprise")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Entreprise> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entreprises", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/entreprise/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<Entreprise> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entreprises", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}

	@PostMapping("/api/entreprise")
	public ResponseEntity<?> create(@Valid @RequestBody EntrepriseCreateRequest request) {

		Entreprise entity = new Entreprise();

		entity.setNom(request.getNom());
		entity.setAdresse(request.getAdresse());
		entity.setNumeroIdFiscal(request.getNumeroIdFiscal());
		entity.setRaisonSociale(request.getRaisonSociale());
		entity.setResponsable(request.getResponsable());
		entity.setDescription(request.getDescription());
		entity.setSlug(Slugger.createSlug(entity.getNom()));

		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());

		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);

		// entityDAO.store(entity);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", map));
	}

	
	

	@PostMapping("/api/entreprise/from-projet")
	public ResponseEntity<?> addEntrepriseFromProjet(@Valid @RequestBody EntrepriseFromCreateRequest request) {

		Entreprise entreprise = new Entreprise();
        
		
		entreprise.setNom(request.getNom());
		entreprise.setAdresse(request.getAdresse());
		entreprise.setNumeroIdFiscal(request.getNumeroIdFiscal());
		entreprise.setRaisonSociale(request.getRaisonSociale());
		entreprise.setResponsable(request.getResponsable());
		entreprise.setDescription(request.getDescription());
		entreprise.setSlug(Slugger.createSlug(entreprise.getNom()));

		entreprise.setCreatedAt(new Date());
		entreprise.setUpdatedAt(new Date());

		Map<String, Object> map = new HashMap<>();
		map.put("entreprise", entreprise);

		entityDAO.store(entreprise);
		
		InformationBanquaire informationBanquaire = new InformationBanquaire(request.getNomBanque(), request.getNumeroCompte(), 
        		request.getCodeSwift(), request.getAdresseBanque(), Slugger.createSlug("compte-banquaire-" + entreprise.getNom()), request.getInformation(), entreprise);
		
		infoBanquaireRepository.save(informationBanquaire);
		
		Projet projet = projetDAO.show(request.getProjetRequest()).get();
		
		projet.getEntreprises().add(entreprise);
		
		projetDAO.update(projet);
		
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", request));
	}
	
	
	@PutMapping("/api/entreprise")
	public ResponseEntity<?> set(@Valid @RequestBody Entreprise entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);

		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@GetMapping("/api/entreprise/delete")
	public ResponseEntity<?> drop(@RequestParam String slug) {
		if (!entityDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		Entreprise entity = entityDAO.show(slug).get();
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/entreprise/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		
		  if (!entityDAO.show(slug).isPresent()) { return ResponseEntity.ok(new
		  JsonObjectResponse(false, "La entity n'existe pas !", null)); }
		 
		Optional<Entreprise> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("entreprise", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}



}
