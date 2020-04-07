package com.technomegapartners.finex.controller;

import java.util.*;

import javax.validation.Valid;

import com.technomegapartners.finex.dao.EncaissementDAO;
import com.technomegapartners.finex.dao.FinancementDAO;
import com.technomegapartners.finex.dao.PartenaireDAO;
import com.technomegapartners.finex.dao.ProjetDAO;
import com.technomegapartners.finex.dao.TypeFinancementDAO;
import com.technomegapartners.finex.model.Partenaire;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.model.TypeFinancement;
import com.technomegapartners.finex.request.CreateFinancementRequest;
import com.technomegapartners.finex.request.EncaisserCreateRequest;

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

import com.technomegapartners.finex.model.Encaissement;
import com.technomegapartners.finex.model.EtatProjet;
import com.technomegapartners.finex.model.Financement;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class FinancementRestController {
	private FinancementDAO entityDAO;
	private TypeFinancementDAO typeFinancementDAO;
	private PartenaireDAO partenaireDAO;
	private ProjetDAO projetDAO;
	private EncaissementDAO encaissementDAO;

	@Autowired
	public FinancementRestController(FinancementDAO entityDAO, TypeFinancementDAO typeFinancementDAO,
			PartenaireDAO partenaireDAO, ProjetDAO projetDAO, EncaissementDAO encaissementDAO) {
		this.entityDAO = entityDAO;
		this.typeFinancementDAO = typeFinancementDAO;
		this.partenaireDAO = partenaireDAO;
		this.projetDAO = projetDAO;
		this.encaissementDAO = encaissementDAO;
	}

	@GetMapping("/api/financement")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Financement> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/financement/no-pagination")
	public ResponseEntity<?> fecthNoPagination() {
		Collection<Financement> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}

	@PostMapping("/api/financement")
	public ResponseEntity<?> create(@Valid @RequestBody CreateFinancementRequest request) {
		Financement financement = new Financement();
		Projet projet = projetDAO.show(request.getProjetSlug()).get();
		TypeFinancement typeFinancement = typeFinancementDAO.show(request.getTypeSlug()).get();
		Partenaire partenaire = partenaireDAO.show(request.getPartenaireSulg()).get();

		projet.setEtat(EtatProjet.En_Cours);
		financement.setLibelle(request.getLibelle());
		financement.setDateSignature(request.getDateSignature());
		financement.setMontantTotal(request.getMontantTotal());
		financement.setTypeFinancement(typeFinancement);
		financement.setCreatedAt(new Date());
		financement.setUpdatedAt(new Date());
		financement.setSlug(Slugger.createSlug(request.getLibelle()));
		financement.setProjet(projet);

		financement.setPartenaires(Collections.singleton(partenaire));

		entityDAO.store(financement);
		projetDAO.update(projet);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", financement);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Financement enregistré avec succès!", map));
	}

	@PostMapping("/api/financement/encaisser")
	public ResponseEntity<?> encaisser(@Valid @RequestBody EncaisserCreateRequest request) {
		Financement financement = entityDAO.show(request.getFinancementSlug()).get();

		Encaissement encaissement = new Encaissement();
		encaissement.setDateSignature(request.getDateSignature());
		encaissement.setDateEncaissement(request.getDateEncaissement());
		encaissement.setReferencePieceJustificative(request.getReferencePieceJustificative());
		encaissement.setMontant(request.getMontant());
		encaissement.setCreatedAt(new Date());
		encaissement.setUpdatedAt(new Date());
		encaissement.setSlug(Slugger.createSlug(financement.getLibelle()));
		Partenaire partenaire = partenaireDAO.show(request.getPartenaireSlug()).get();
		financement.setPartenaires(Collections.singleton(partenaire));
		financement.setMontantEncaisse(financement.getMontantEncaisse() + encaissement.getMontant());
		financement.setMontantRestant(financement.getMontantTotal()- financement.getMontantEncaisse());
		financement.setUpdatedAt(new Date());
		
		/*financement.setEncaissements(Collections.singleton(encaissement));*/
		
		encaissement.setFinancement(financement);
		encaissementDAO.store(encaissement);
		entityDAO.update(financement);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", financement);
		

		return ResponseEntity.ok(new JsonObjectResponse(true, "Encaissement enregistré", map));
	}

	@PutMapping("/api/financement")
	public ResponseEntity<?> set(@Valid @RequestBody Financement entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@PutMapping("/api/financement/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody Financement entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/financement/show")
	public ResponseEntity<?> select(@RequestParam String slug) {

		Optional<Financement> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("financement", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}
	
}
