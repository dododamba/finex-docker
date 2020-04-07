
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
import org.springframework.core.io.Resource;

import com.technomegapartners.finex.dao.EmployeDao;
import com.technomegapartners.finex.dao.EtapeDAO;
import com.technomegapartners.finex.dao.ProjetDAO;
import com.technomegapartners.finex.dao.TacheDAO;
import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.Etape;
import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Priorite;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.model.Tache;
import com.technomegapartners.finex.repository.PrioriteRepository;
import com.technomegapartners.finex.request.AssignTaskTOEmploye;
import com.technomegapartners.finex.request.CreateTacheRequest;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.services.StorageService;
import com.technomegapartners.finex.util.Slugger;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })

public class TacheRestController {

	private TacheDAO entityDAO;
	private EtapeDAO etapeDAO;
	private EmployeDao employeDao;
	private ProjetDAO projetDAO;
	private PrioriteRepository prioriteRepository;

	private StorageService storageService;

	@Autowired
	public TacheRestController(TacheDAO entityDAO, StorageService storageService, ProjetDAO projetDAO,
			EmployeDao employeDao, EtapeDAO etapeDAO, PrioriteRepository prioriteRepository) {
		this.entityDAO = entityDAO;
		this.storageService = storageService;
		this.projetDAO = projetDAO;
		this.etapeDAO = etapeDAO;
		this.employeDao = employeDao;
		this.prioriteRepository = prioriteRepository;
	}

	@GetMapping("/api/tache/my-tasks")
	public ResponseEntity<?> getMyGroups(@RequestParam String slug){
		Collection<Tache> collection = entityDAO.getTaskForConnectedUser(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("groupes", collection);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des taches", map));
		
	}
	
	
	@PostMapping("/api/tache")
	public ResponseEntity<?> create(@Valid @RequestBody AssignTaskTOEmploye request) {

		String libelle = request.getNom();
		String description = request.getDescription();
		Date dateDebut = request.getDateDebut();
		Date dateFin = request.getDateFin();
		double cout = request.getCout();
		String slug = Slugger.createSlug(request.getNom());
		Employe planificateur = new Employe();
		Set<Employe> executeur = new HashSet<>();
		GroupeTravail groupeTravail = new GroupeTravail();
		Etape etape = new Etape();
		Projet projet = new Projet();
		Priorite priorite = new Priorite();

		if (!projetDAO.show(request.getProjetSlug()).isPresent()) {
			return ResponseEntity
					.ok(new JsonObjectResponse(false, "Le projet auquel cette tache est affilié n'existe pas !", null));
		} else {
			projet = projetDAO.show(request.getProjetSlug()).get();

		}

		/*if(request.getExceuteurSlug() != null) {
			for(String exec : request.getExceuteurSlug()) {
				Employe e = employeDao.show(exec).get();
				executeur.add(e);
			}
			
		}*/
	

		if (!employeDao.show(request.getPlanificateurSlug()).isPresent()) {
			return ResponseEntity
					.ok(new JsonObjectResponse(false, "L'employé planificateur de cette tache n'existe pas !", null));
		} else {
			planificateur = employeDao.show(request.getPlanificateurSlug()).get();
		}

		if (!prioriteRepository.findByLibelleAndDeletedAt(request.getPriorite(), null).isPresent()) {
			Priorite priorite2 = new Priorite(request.getPriorite(), Slugger.toSlug(request.getPriorite()), new Date(),
					new Date(), null);
			prioriteRepository.save(priorite2);
			priorite = priorite2;
		} else {
			priorite = prioriteRepository.findByLibelleAndDeletedAt(request.getPriorite(), null).get();
		}

		if (!etapeDAO.show(request.getEtapeSlug()).isPresent()) {
			return ResponseEntity
					.ok(new JsonObjectResponse(false, "L'etape auquelle cette tache est affilié n'existe pas !", null));
		} else {
			etape = etapeDAO.show(request.getEtapeSlug()).get();
		}

		Tache tache = new Tache(libelle, description, slug, null, planificateur, executeur, etape, null, cout,
				dateDebut, dateFin, new Date(), new Date(), null);

		tache.setProjet(projet);

		tache.setPriorite(Collections.singleton(priorite));
		
		entityDAO.store(tache);

		return ResponseEntity.ok(new JsonObjectResponse(true, "Tache Ajouté  crée avec succès !", tache));
	}

	@PostMapping
	public ResponseEntity<?> assignTaskTOEmploye() {
		return ResponseEntity.ok(new JsonObjectResponse(true, "", null));
	}

	@GetMapping("/api/tache")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Tache> entitys = entityDAO.all(pageable);

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste items vide !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items", map));
	}

	@GetMapping("/api/tache/no-pagination")
	public ResponseEntity<?> fecth() {
		Collection<Tache> entitys = entityDAO.allWithOutPagination();

		if (entitys.isEmpty()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Liste des items vides !", null));
		}
		Map<String, Object> map = new HashMap<>();
		map.put("entitys", entitys);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des items ! ", map));
	}

	@PutMapping("/api/tache")
	public ResponseEntity<?> set(@Valid @RequestBody Tache entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.update(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item mise à jours avec succès", map));
	}

	@PutMapping("/api/tache/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody Tache entity) {
		if (entity.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "Le Item n'existe pas !", null));
		}
		entityDAO.delete(entity);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Item supprimé avec succès", map));
	}

	@GetMapping("/api/tache/show")
	public ResponseEntity<?> select(@RequestParam String slug) {
		/*
		 * if (entityDAO.show(slug).isPresent()) { return ResponseEntity.ok(new
		 * JsonObjectResponse(false, "La entity n'existe pas !", null)); }
		 */
		Optional<Tache> entity = entityDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("entity", entity);
		return ResponseEntity.ok(new JsonObjectResponse(false, "detail Item", map));
	}

}
