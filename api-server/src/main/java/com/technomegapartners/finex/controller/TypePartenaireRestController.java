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

import com.technomegapartners.finex.dao.TypePartenaireDAO;
import com.technomegapartners.finex.model.TypePartenaire;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class TypePartenaireRestController {

	private TypePartenaireDAO typePartenaireDAO;

	@Autowired
	public TypePartenaireRestController(TypePartenaireDAO typePartenaireDAO) {
		this.typePartenaireDAO = typePartenaireDAO;
	}

	@GetMapping("/api/type-partenaire")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<TypePartenaire> typePartenaires = typePartenaireDAO.all(pageable);

		if (typePartenaires.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste typePartenaire vide", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("typePartenaires", typePartenaires);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des typePartenaires", map));
	}

	@GetMapping("/api/type-partenaire/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<TypePartenaire> typePartenaires = typePartenaireDAO.allWithOutPagination();

		if (typePartenaires.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste typePartenaire vide", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("typePartenaires", typePartenaires);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des typePartenaires", map));
	}

	@PostMapping("/api/type-partenaire")
	public ResponseEntity<?> create(@Valid @RequestBody TypePartenaire typePartenaire) {
		if (typePartenaire.getId() != null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La typePartenaire existe !", null));
		}
		typePartenaire.setSlug(Slugger.createSlug(typePartenaire.getLibelle()));
		typePartenaire.setCreatedAt(new Date());
		typePartenaire.setUpdatedAt(new Date());
		typePartenaireDAO.store(typePartenaire);
		return ResponseEntity.ok(new JsonObjectResponse(true, "TypePartenaire crée avec succès !", typePartenaire));
	}

	@PutMapping("/api/type-partenaire")
	public ResponseEntity<?> set(@Valid @RequestBody TypePartenaire typePartenaire) {
		if (typePartenaire.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La typePartenaire n'existe pas !", null));
		}
		typePartenaireDAO.update(typePartenaire);
		Map<String, Object> map = new HashMap<>();
		map.put("typePartenaire", typePartenaire);
		return ResponseEntity.ok(new JsonObjectResponse(false, "TypePartenaire mise à jours avec succès", map));
	}

	@PutMapping("/api/type-partenaire/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody TypePartenaire typePartenaire) {
		if (typePartenaire.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La typePartenaire n'existe pas !", null));
		}
		typePartenaireDAO.delete(typePartenaire);
		Map<String, Object> map = new HashMap<>();
		map.put("typePartenaire", typePartenaire);
		return ResponseEntity.ok(new JsonObjectResponse(false, "TypePartenaire supprimé avec succès", map));
	}

	@GetMapping("/api/type-partenaire/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		/*
		 * if (typePartenaireDAO.show(slug).isPresent()) { return ResponseEntity.ok(new
		 * JsonObjectResponse(false, "La typePartenaire n'existe pas !", null)); }
		 */
		Optional<TypePartenaire> typePartenaire = typePartenaireDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("typePartenaire", typePartenaire);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail type partenaire", map));
	}

}
