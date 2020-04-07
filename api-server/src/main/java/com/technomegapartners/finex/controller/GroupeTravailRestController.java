

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

import com.technomegapartners.finex.dao.EtapeDAO;
import com.technomegapartners.finex.dao.GroupeTravailDAO;
import com.technomegapartners.finex.dao.ProjetDAO;
import com.technomegapartners.finex.model.Etape;
import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class GroupeTravailRestController {

	private GroupeTravailDAO entityDAO;
	private EtapeDAO etapeDAO;
	private ProjetDAO projetDAO;

	@Autowired
	public GroupeTravailRestController(GroupeTravailDAO entityDAO,EtapeDAO etapeDAO,ProjetDAO projetDAO) {
		this.entityDAO = entityDAO;
		this.etapeDAO = etapeDAO;
		this.projetDAO = projetDAO;
	}

	@GetMapping("/api/groupe-travail")
	public ResponseEntity<?> fecth(@RequestParam  int page) {
        PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<GroupeTravail> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/groupe-travail/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<GroupeTravail> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}


	@GetMapping("/api/groupe-travail/my-groups")
	public ResponseEntity<?> getMyGroups(@RequestParam String slug){
		Collection<GroupeTravail> collection = entityDAO.getGroupsForLoggedEmploye(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("groupes", collection);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
		
	}

	@PostMapping("/api/groupe-travail")
	public ResponseEntity<?> create(@Valid @RequestBody GroupeTravail entity) {
		if (entity.getId() != null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item existe déjà !", null));
		}
		entity.setSlug(Slugger.createSlug(entity.getNom()));
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());
		entityDAO.store(entity);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", entity));
	}

	@PutMapping("/api/groupe-travail")
	public ResponseEntity<?> set(@Valid @RequestBody GroupeTravail entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@PutMapping("/api/groupe-travail/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody GroupeTravail entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}


	@GetMapping("/api/groupe-travail/select")
	public ResponseEntity<?> selectGet(@RequestParam String slug) {
	
		GroupeTravail groupeTravail = new GroupeTravail();
		Optional<GroupeTravail> entity = entityDAO.show(slug);
		groupeTravail= entity.get();
		Collection<Etape> etapes = etapeDAO.allByGroupeTravail(groupeTravail);
		Map<String, Object> map = new HashMap<>();
		map.put("groupeTravail", groupeTravail);
		map.put("etapes", etapes);

		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}
	
	
	@GetMapping("/api/groupe-travail/select-by-project")
	public ResponseEntity<?> selectByProject(@RequestParam String slug) {
		
		Collection<GroupeTravail> groupeTravail = new ArrayList<>();
		Projet projet = projetDAO.show(slug).get();
		groupeTravail = entityDAO.allByProjet(projet);
		
		Map<String, Object> map = new HashMap<>();
		map.put("groupeTravail", groupeTravail);

		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}

}
