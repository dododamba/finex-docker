
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

import com.technomegapartners.finex.dao.MaitreDoeuvreDAO;
import com.technomegapartners.finex.model.InformationBanquaire;
import com.technomegapartners.finex.model.MaitreDoeuvre;
import com.technomegapartners.finex.repository.InformationBanquaireRepository;
import com.technomegapartners.finex.request.CreateMaitreDoeuvreRequest;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class MaitreDoeuvreRestController {

	private MaitreDoeuvreDAO entityDAO;
	private InformationBanquaireRepository infoBanquaireRepo;

	@Autowired
	public MaitreDoeuvreRestController(MaitreDoeuvreDAO entityDAO, InformationBanquaireRepository infoBanquaireRepo) {
		this.entityDAO = entityDAO;
		this.infoBanquaireRepo = infoBanquaireRepo;
	}

	@GetMapping("/api/soumissionaire")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<MaitreDoeuvre> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/soumissionaire/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<MaitreDoeuvre> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}

	@PostMapping("/api/soumissionaire")
	public ResponseEntity<?> create(@Valid @RequestBody CreateMaitreDoeuvreRequest request) {

		MaitreDoeuvre entity = new MaitreDoeuvre();
		InformationBanquaire banquaire = new InformationBanquaire();

		entity.setNom(request.getNom());
		entity.setResponsable(request.getResponsable());
		entity.setSlug(Slugger.createSlug(entity.getNom()));
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());

		banquaire.setAdresse(request.getAdresse());
		banquaire.setCodeSwift(request.getCodeSwift());
		banquaire.setInformation(request.getInformation());
		banquaire.setNomBanque(request.getNomBanque());
		banquaire.setNumeroCompte(request.getNumeroCompte());

		entityDAO.store(entity);

		infoBanquaireRepo.save(banquaire);

		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", entity));
	}

	@PutMapping("/api/soumissionaire")
	public ResponseEntity<?> set(@Valid @RequestBody MaitreDoeuvre entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@PutMapping("/api/soumissionaire/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody MaitreDoeuvre entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/soumissionaire/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		/*
		 * if (entityDAO.show(slug).isPresent()) { return ResponseEntity.ok(new
		 * JsonObjectResponse(false, "La entity n'existe pas !", null)); }
		 */
		Optional<MaitreDoeuvre> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}

}