
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

import com.technomegapartners.finex.dao.TypeFinancementDAO;
import com.technomegapartners.finex.model.TypeFinancement;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})

public class TypeFinancementRestController {

    private TypeFinancementDAO entityDAO;

    @Autowired
    public TypeFinancementRestController(TypeFinancementDAO entityDAO) {
        this.entityDAO = entityDAO;
    }

    @GetMapping("/api/type-financement")
    public ResponseEntity<?> fecth(@RequestParam int page) {
        PageRequest pageable = PageRequest.of(page - 1, 15);
        Page<TypeFinancement> entitys = entityDAO.all(pageable);

        if (entitys.isEmpty()) {
            return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
        }
        Map<String, Object> map = new HashMap<>();
        map.put("entitys", entitys);
        return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
    }

    @GetMapping("/api/type-financement/no-pagination")
    public ResponseEntity<?> fecthNoPagination() {
        Collection<TypeFinancement> entitys = entityDAO.allWithOutPagination();

        if (entitys.isEmpty()) {
            return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
        }
        Map<String, Object> map = new HashMap<>();
        map.put("entitys", entitys);
        return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
    }

    @PostMapping("/api/type-financement")
    public ResponseEntity<?> create(@Valid @RequestBody TypeFinancement entity) {
        if (entity.getId() != null) {
            return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item existe déjà !", null));
        }
        entity.setSlug(Slugger.createSlug(entity.getLibelle()));
        entity.setCreatedAt(new Date());
        entity.setUpdatedAt(new Date());
        TypeFinancement typeFinancement = new TypeFinancement();
        typeFinancement.setLibelle(entity.getLibelle());
        typeFinancement.setDescription(entity.getDescription());
        typeFinancement.setCreatedAt(entity.getCreatedAt());
        typeFinancement.setUpdatedAt(entity.getUpdatedAt());
        typeFinancement.setSlug(entity.getSlug());
         entityDAO.store(typeFinancement);
        return ResponseEntity.ok(new JsonObjectResponse(true, "Item crée avec succès !", typeFinancement));
    }

    @PutMapping("/api/type-financement")
    public ResponseEntity<?> set(@Valid @RequestBody TypeFinancement entity) {
        if (entity.getId() == null) {
            return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
        }
        entityDAO.update(entity);
        Map<String, Object> map = new HashMap<>();
        map.put("entity", entity);
        return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
    }

    @PutMapping("/api/type-financement/delete")
    public ResponseEntity<?> drop(@Valid @RequestBody TypeFinancement entity) {
        if (entity.getId() == null) {
            return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
        }
        entityDAO.delete(entity);
        Map<String, Object> map = new HashMap<>();
        map.put("entity", entity);
        return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
    }

    @GetMapping("/api/type-financement/show")
    public ResponseEntity<?> select(@RequestParam String slug) {
        /*
         * if (entityDAO.show(slug).isPresent()) { return ResponseEntity.ok(new
         * JsonObjectResponse(false, "La entity n'existe pas !", null)); }
         */
        Optional<TypeFinancement> entity = entityDAO.show(slug);
        Map<String, Object> map = new HashMap<>();
        map.put("entity", entity);
        return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
    }

}
