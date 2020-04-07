package com.technomegapartners.finex.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.technomegapartners.finex.model.Priorite;
import com.technomegapartners.finex.repository.PrioriteRepository;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })
public class PrioriteRestController {

	private PrioriteRepository repository;

	@Autowired
	public PrioriteRestController(PrioriteRepository repository) {
		this.repository = repository;
	}

	@GetMapping("/api/priorites")
	public ResponseEntity<?> fecthNoPagination(@RequestParam String libelle) {
		Collection<Priorite> priorites = repository.findByLibelle(libelle);
		Map<String, Object> map = new HashMap<>();
		map.put("priorites", priorites);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des priorites", map));
	}

	@PostMapping("/api/priorites")
	public ResponseEntity<?> create(@Valid @RequestBody Priorite entity) {
		entity.setSlug(Slugger.createSlug(entity.getLibelle()));
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(new Date());
		repository.save(entity);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", entity));
	}
	
	@GetMapping("/api/priorites/init")
	public ResponseEntity<?> init() {
		Collection<Priorite> priorites = new ArrayList<Priorite>();
		priorites.add(new Priorite("Important",Slugger.createSlug("important"),new Date(),new Date(),null));
		priorites.add(new Priorite("Tres Important",Slugger.createSlug("tres-important"),new Date(),new Date(),null));
		priorites.add(new Priorite("Faible",Slugger.createSlug("faible"),new Date(),new Date(),null));

        repository.saveAll(priorites);
		Map<String, Object> map = new HashMap<>();
		map.put("priorites", priorites);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des priorites", map));
	}
	
	

}
