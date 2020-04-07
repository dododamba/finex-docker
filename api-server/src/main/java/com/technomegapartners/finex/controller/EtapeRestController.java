
/**
 *
 */
package com.technomegapartners.finex.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.validation.Valid;

import com.technomegapartners.finex.dao.ProjetDAO;
import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.repository.GroupeTravailRepository;
import com.technomegapartners.finex.request.CreateEtapeForSpecificProjectRequest;
import com.technomegapartners.finex.request.CreateEtapeRequest;
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

import com.technomegapartners.finex.dao.EtapeDAO;
import com.technomegapartners.finex.model.Etape;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;
import com.technomegapartners.finex.util.StringToDateConverter;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class EtapeRestController {

	private EtapeDAO entityDAO;
	private GroupeTravailRepository groupeTravailDAO;
	private ProjetDAO projetDAO;

	@Autowired
	public EtapeRestController(EtapeDAO entityDAO, GroupeTravailRepository groupeTravailDAO, ProjetDAO projetDAO) {
		this.entityDAO = entityDAO;
		this.groupeTravailDAO = groupeTravailDAO;
		this.projetDAO = projetDAO;
	}

	@GetMapping("/api/etape")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Etape> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("etapes", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/etape/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<Etape> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("etapes", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}

	@PostMapping("/api/etape")
	public ResponseEntity<?> create(@Valid @RequestBody CreateEtapeRequest request) {

		Etape entity = new Etape();
		GroupeTravail groupeTravail = new GroupeTravail();
		groupeTravail = groupeTravailDAO.findById(request.getGroupeTravail()).get();

		Date dateDebut = StringToDateConverter.convert(request.getDateDebut());
		Date dateFin = StringToDateConverter.convert(request.getDateFin());

		entity.setDateDebut(dateDebut);
		entity.setDateFin(dateFin);

		entity.setNom(request.getNom());
		entity.setDescription(request.getDescription());
		entity.setSlug(Slugger.createSlug(entity.getNom()));

		entity.setCout(request.getCout());
		entity.setGroupeTavail(groupeTravail);
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());

		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		map.put("entity1", request.getDateDebut());
		map.put("entity2", request.getDateFin());

		// entityDAO.store(entity);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", map));
	}
	
	@PostMapping("/api/etape/specific")
	public ResponseEntity<?> createForSpecificProject(@Valid @RequestBody CreateEtapeForSpecificProjectRequest request) {

		Etape entity = new Etape();
		Projet projet = new Projet();

		if(!projetDAO.show(request.getProjetSlug()).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le projet associé n'existe pas !", null));

		}
		
		projet = projetDAO.show(request.getProjetSlug()).get();
		
		Date dateDebut = StringToDateConverter.convert(request.getDateDebut());
		Date dateFin = StringToDateConverter.convert(request.getDateFin());
		

		entity.setDateDebut(dateDebut);
		entity.setDateFin(dateFin);

		entity.setNom(request.getNom());
		entity.setDescription(request.getDescription());
		entity.setSlug(Slugger.createSlug(entity.getNom()));

		entity.setCout(request.getCout());
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());
		entity.setProjet(projet);

		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		

		entityDAO.store(entity);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", map));
	}


	@PutMapping("/api/etape")
	public ResponseEntity<?> set(@Valid @RequestBody Etape entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);

		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@GetMapping("/api/etape/delete")
	public ResponseEntity<?> drop(@RequestParam String slug) {
		if (!entityDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		Etape entity = entityDAO.show(slug).get();
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/etape/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		/*
		 * if (entityDAO.show(slug).isPresent()) { return ResponseEntity.ok(new
		 * JsonObjectResponse(false, "La entity n'existe pas !", null)); }
		 */
		Optional<Etape> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("etape", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}

	@GetMapping("/api/etape/select-by-project")
	public ResponseEntity<?> selectByProject(@RequestParam int page, @RequestParam String slug) {

		Projet projet = projetDAO.show(slug).get();
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Etape> etapes = entityDAO.allByProject(pageable, projet);

		Map<String, Object> map = new HashMap<>();
		map.put("etapes", etapes);

		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}

}
