package com.technomegapartners.finex.controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.validation.Valid;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.technomegapartners.finex.dao.CatacteristiqueTechniqueDAO;
import com.technomegapartners.finex.dao.EmployeDao;
import com.technomegapartners.finex.dao.EtapeDAO;
import com.technomegapartners.finex.dao.FinancementDAO;
import com.technomegapartners.finex.dao.GroupeTravailDAO;
import com.technomegapartners.finex.dao.InstitutionDAO;
import com.technomegapartners.finex.dao.MaitreDouvrageDAO;
import com.technomegapartners.finex.dao.PartenaireDAO;
import com.technomegapartners.finex.dao.ProjetControlleurDAO;
import com.technomegapartners.finex.dao.ProjetDAO;
import com.technomegapartners.finex.dao.RegionDAO;
import com.technomegapartners.finex.dao.SecteurDAO;
import com.technomegapartners.finex.dao.TypeMarcheDAO;
import com.technomegapartners.finex.dao.MaitreDoeuvreDAO;
import com.technomegapartners.finex.dao.MaitreDoeuvreDelegueDAO;
import com.technomegapartners.finex.model.CatarteristiqueTechnique;
import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.EtatProjet;
import com.technomegapartners.finex.model.Financement;
import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Institution;
import com.technomegapartners.finex.model.MaitreDouvrage;
import com.technomegapartners.finex.model.Partenaire;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.model.ProjetControlleur;
import com.technomegapartners.finex.model.Region;
import com.technomegapartners.finex.model.Secteur;
import com.technomegapartners.finex.model.TypeMarche;
import com.technomegapartners.finex.repository.CatarteristiqueTechniqueRepository;
import com.technomegapartners.finex.repository.EmployeRepository;
import com.technomegapartners.finex.model.MaitreDoeuvre;
import com.technomegapartners.finex.model.MaitreDoeuvreDelegue;
import com.technomegapartners.finex.request.CreateProjetRequest;
import com.technomegapartners.finex.request.ProjetCreateRequest;
import com.technomegapartners.finex.response.JsonObjectResponse;
import com.technomegapartners.finex.services.StorageService;
import com.technomegapartners.finex.util.Slugger;

@RestController
@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })
public class ProjetRestController {
	private PartenaireDAO partenaireDAO;
	private EmployeDao employeDao;
	private ProjetDAO projetDAO;
	private GroupeTravailDAO groupeTravailDAO;
	private MaitreDoeuvreDAO maitreDoeuvreDAO;
	private MaitreDouvrageDAO maitreDouvrageDAO;
	private EtapeDAO etapeDAO;
	private FinancementDAO financementDAO;
	private SecteurDAO secteurDAO;
	private ProjetControlleurDAO projetControlleurDAO;
	private CatacteristiqueTechniqueDAO catacteristiqueTechniqueDAO;
	private final StorageService storageService;
	private EmployeRepository employeR;
	private InstitutionDAO institutionDAO;
	private CatarteristiqueTechniqueRepository catacteristiqueTechniqueRepo;
	private MaitreDoeuvreDelegueDAO maitreDoeuvreDelegueDAO;
	private TypeMarcheDAO typeMacheDAO;
	private RegionDAO regionDAO;

	@Autowired
	public ProjetRestController(PartenaireDAO partenaireDAO, EmployeDao employeDao, ProjetDAO projetDAO,
			GroupeTravailDAO groupeTravailDAO, MaitreDoeuvreDAO maitreDoeuvreDAO, MaitreDouvrageDAO maitreDouvrageDAO,
			StorageService storageService, EtapeDAO etapeDAO, FinancementDAO financementDAO, SecteurDAO secteurDAO,
			ProjetControlleurDAO projetControlleurDAO, EmployeRepository employeR,
			CatacteristiqueTechniqueDAO catacteristiqueTechniqueDAO, InstitutionDAO institutionDAO,
			CatarteristiqueTechniqueRepository catacteristiqueTechniqueRepo,
			MaitreDoeuvreDelegueDAO maitreDoeuvreDelegueDAO, TypeMarcheDAO typeMacheDAO, RegionDAO regionDAO) {
		this.partenaireDAO = partenaireDAO;
		this.employeDao = employeDao;
		this.projetDAO = projetDAO;
		this.groupeTravailDAO = groupeTravailDAO;
		this.maitreDoeuvreDAO = maitreDoeuvreDAO;
		this.maitreDouvrageDAO = maitreDouvrageDAO;
		this.storageService = storageService;
		this.etapeDAO = etapeDAO;
		this.financementDAO = financementDAO;
		this.secteurDAO = secteurDAO;
		this.projetControlleurDAO = projetControlleurDAO;
		this.employeR = employeR;
		this.catacteristiqueTechniqueDAO = catacteristiqueTechniqueDAO;
		this.institutionDAO = institutionDAO;
		this.catacteristiqueTechniqueRepo = catacteristiqueTechniqueRepo;
		this.maitreDoeuvreDelegueDAO = maitreDoeuvreDelegueDAO;
		this.typeMacheDAO = typeMacheDAO;
		this.regionDAO = regionDAO;
	}

	@GetMapping("/api/projet/no-pagination")
	public ResponseEntity<?> fecthNoPagination() {
		Collection<Projet> projets = projetDAO.noPAgination();
		Map<String, Object> map = new HashMap<>();
		map.put("projets", projets);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des projets", map));
	}

	@GetMapping("/api/projet/groupes")
	public ResponseEntity<?> fecthNoPaginationGroupes() {
		Collection<Projet> projets = projetDAO.noPAgination();
		Collection<GroupeTravail> groupeTravails = new ArrayList<>();
		Collection<Object> collection = new LinkedList<>();
		for (Projet projet : projets) {
			collection.addAll(projet.getGroupeTravail());
		}
		Map<String, Object> map = new HashMap<>();
		map.put("groupes", collection);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des projets", map));
	}

	@GetMapping("/api/projet")
	public ResponseEntity<?> fecth(@RequestParam int page) {
		PageRequest pageable = PageRequest.of(page - 1, 15);
		Page<Projet> projets = projetDAO.all(pageable);

	
		Map<String, Object> map = new HashMap<>();
		map.put("projets", projets);
		return ResponseEntity.ok(new JsonObjectResponse(true, "Liste des projets", map));
	}

	@GetMapping("/api/projet/select")
	public ResponseEntity<?> selectByGet(@RequestParam String slug, @RequestParam int page) {
		if (!maitreDouvrageDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La ressource n'existe pas !", null));
		}
		PageRequest pageable = PageRequest.of(page - 1, 15);
		MaitreDouvrage maitreDouvrage = maitreDouvrageDAO.show(slug).get();
		Page<Projet> projets = projetDAO.collectProjectForConnectedUser(maitreDouvrage, pageable);

		Map<String, Object> map = new HashMap<>();
		map.put("projets", projets);

		return ResponseEntity.ok(new JsonObjectResponse(true, " Detail Projet ", map));
	}
	

	@GetMapping("/api/projet/my-project")
	public ResponseEntity<?> projectForConnectedUser(@RequestParam String slug) {
		if (!maitreDouvrageDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La ressource n'existe pas !", null));
		}
		MaitreDouvrage maitreDouvrage = maitreDouvrageDAO.show(slug).get();
		Collection<Projet> projets = projetDAO.collectProjectForConnectedUserNoPagination(maitreDouvrage);

		Map<String, Object> map = new HashMap<>();
		map.put("projets", projets);

		return ResponseEntity.ok(new JsonObjectResponse(true, " Detail Projet ", map));
	}
	
	
	

	@PutMapping("/api/projet")
	public ResponseEntity<?> set(@Valid @RequestBody Projet projet) {
		if (projet.getId() == null) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La projet n'existe pas !", null));
		}
		projetDAO.update(projet);
		Map<String, Object> map = new HashMap<>();
		map.put("projet", projet);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Projet mise à jours avec succès", map));
	}

	@PutMapping("/api/projet/delete")
	public ResponseEntity<?> drop(@Valid @RequestBody String slug) {
		Projet projet = projetDAO.show(slug).get();
		projetDAO.delete(projet);
		Map<String, Object> map = new HashMap<>();
		map.put("projet", projet);
		return ResponseEntity.ok(new JsonObjectResponse(false, "Projet supprimé avec succès", map));
	}

	@GetMapping("/api/projet/show")
	public ResponseEntity<?> select(@Valid @RequestParam String slug) {
		if (!projetDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La projet n'existe pas !", null));
		}
		Optional<Projet> projet = projetDAO.show(slug);
		Map<String, Object> map = new HashMap<>();
		map.put("projet", projet);
		return ResponseEntity.ok(new JsonObjectResponse(false, " Detail Projet ", map));
	}

	@GetMapping("/api/projet/mes-projets")
	public ResponseEntity<?> mesProjets(@RequestParam String slug) {
		if (!projetDAO.show(slug).isPresent()) {
			return ResponseEntity.ok(new JsonObjectResponse(false, "La projet n'existe pas !", null));
		}
		Projet projet = new Projet();
		Optional<Projet> projetO = projetDAO.show(slug);
		projet = projetO.get();
		Collection<GroupeTravail> groupeTravails = groupeTravailDAO.allByProjet(projet);
		Collection<Financement> financement = financementDAO.getByProjet(projet);

		Map<String, Object> map = new HashMap<>();
		map.put("projet", projet);
		map.put("groupeTravails", groupeTravails);
		map.put("financements", financement);

		return ResponseEntity.ok(new JsonObjectResponse(true, " Detail Projet ", map));
	}

	@PostMapping("/api/projet")
	public ResponseEntity<?> create(@Valid @RequestBody ProjetCreateRequest request) throws ParseException {

		String[] partenaires = request.getPartenaires();

		/**
		 * 
		 * String[] soumissionaireR = request.getSoumissionaire();
		 * 
		 */
		String[] maitreDoeuvrageR = request.getMaitreDoeuvrage();
		// JSONObject[] catacteristiqueTechniques =
		// request.getCaracteristiqueTechniques();
		// Set<CatarteristiqueTechnique> catarteristiqueTechniquesList = new
		// HashSet<CatarteristiqueTechnique>();
		Set<Partenaire> partenaireCollection = new HashSet<>();
		Set<MaitreDoeuvre> maitreDoeuvres = new HashSet<MaitreDoeuvre>();
		Set<MaitreDouvrage> maitreDouvrages = new HashSet<MaitreDouvrage>();
		Employe employe = employeDao.showBySlug(request.getResponsable());
		for (String partenaire : partenaires) {
			Partenaire partenaireObjet = partenaireDAO.getOneByNom(partenaire);
			partenaireCollection.add(partenaireObjet);
		}

		GroupeTravail groupeTravail = new GroupeTravail();
		groupeTravail.setNom("groupe de travail principale du projet : " + request.getNom());
		groupeTravail.setAdministrarteur(employe);
		groupeTravail.setSlug(Slugger.createSlug("groupe-travail-" + request.getNom()));
		groupeTravail.setCreatedAt(new Date());
		groupeTravail.setUpdatedAt(new Date());
		groupeTravail.setMembres(Collections.singleton(employe));
		Projet projet = new Projet();

		projet.setNom(request.getNom());
		projet.setBudgetPrevisionel(request.getBudget());
		projet.setDescription(request.getDescription());
		projet.setSlug(Slugger.createSlug(request.getNom()));
		projet.setDateDebut(request.getDateDebut());
		projet.setDateFin(request.getDateFin());
		projet.setCreatedAt(new Date());
		projet.setUpdatedAt(new Date());

		projet.getPartenaires().addAll(partenaireCollection);

		/**
		 * 
		 * 
		 * if (soumissionaireR != null) { for (String soumissionaire : soumissionaireR)
		 * { MaitreDoeuvre soumissionaireObjet =
		 * maitreDoeuvreDAO.getOneByNom(soumissionaire);
		 * maitreDoeuvres.add(soumissionaireObjet); }
		 * 
		 * projet.getSoumissionaires().addAll(maitreDoeuvres); }
		 */

		/*
		 * if (maitreDoeuvrageR != null) { for (String maitreDoeuvrage :
		 * maitreDoeuvrageR) { MaitreDouvrage maitreDoeuvrageObjet =
		 * maitreDouvrageDAO.getOneByNom(maitreDoeuvrage);
		 * maitreDouvrages.add(maitreDoeuvrageObjet); }
		 * 
		 * projet.getMaitreDouvrage().addAll(maitreDouvrages); }
		 */

		projet.setResponsable(employe);
		groupeTravail.setProjet(projet);
		HashMap<String, Object> objMap = new HashMap<String, Object>();
		projetDAO.store(projet);
		groupeTravailDAO.store(groupeTravail);

		/*
		 * if (catacteristiqueTechniques != null) { for (JSONObject caracT :
		 * catacteristiqueTechniques) { CatarteristiqueTechnique technique = new
		 * CatarteristiqueTechnique();
		 * technique.setLibelle(caracT.getString("libelle"));
		 * switch(caracT.getString("nature")) { case "date" : technique.setValeur("");
		 * break; }
		 * 
		 * technique.setValeur(caracT.getString("libelle"));
		 * technique.setProjet(projet); catarteristiqueTechniques.add(technique); } }
		 */

		objMap.put("projet", projet);
		// objMap.put("catarteristiqueTechniques", catacteristiqueTechniques);

		return ResponseEntity.ok(new JsonObjectResponse(true, "Projet ajouté avec succès", objMap));
	}

	@PostMapping("/api/projet/create/own-projet")
	public ResponseEntity<?> createMyOwnProjet(@Valid @RequestBody CreateProjetRequest request) throws ParseException {
	
    
		// String[] soumissionaireR = request.getSoumissionaire();
		String maitreDoeuvrageR = request.getMaitreDoeuvrage();
		CatarteristiqueTechnique[] caraTechniques = request.getCaracteristiqueTechniques();
		Set<MaitreDoeuvre> maitreDoeuvres = new HashSet<MaitreDoeuvre>();
		// MaitreDouvrage maitreDouvrage = new MaitreDouvrage();
		Employe employe = employeDao.showBySlug(request.getResponsable());
		Secteur secteur = secteurDAO.show(request.getSecteur()).get();
		MaitreDoeuvreDelegue doeuvreDelegue = new MaitreDoeuvreDelegue();
		MaitreDoeuvre doeuvre = new MaitreDoeuvre();

		GroupeTravail groupeTravail = new GroupeTravail();
		groupeTravail.setNom("groupe de travail principale du projet : " + request.getNom());
		groupeTravail.setAdministrarteur(employe);
		groupeTravail.setSlug(Slugger.createSlug("groupe-travail-" + request.getNom()));
		groupeTravail.setCreatedAt(new Date());
		groupeTravail.setUpdatedAt(new Date());
		groupeTravail.setMembres(Collections.singleton(employe));
		Projet projet = new Projet();

		projet.setNom(request.getNom());
		projet.setNumeroProjet(request.getNumeroProjet());
		projet.setBudgetPrevisionel(request.getBudget());
		projet.setDescription(request.getDescription());
		projet.setSlug(Slugger.createSlug(request.getNom()));
		projet.setDateDebut(request.getDateDebut());
		projet.setDateFin(request.getDateFin());
		projet.setCreatedAt(new Date());
		projet.setUpdatedAt(new Date());
		projet.setEtat(EtatProjet.Proposé);

		projet.setSecteur(secteur);
		projet.setNumeroProjet(request.getNumeroProjet());
		projet.setCelluleDexecution(request.getCelluleDexecution());

		if (request.getControllleur() != null) {
			if (projetControlleurDAO.getOneByNom(request.getControllleur()) != null) {
				ProjetControlleur controlleur = projetControlleurDAO.getOneByNom(request.getControllleur());
				projet.setProjetControlleur(controlleur);
			} else {
				ProjetControlleur controlleur = new ProjetControlleur();
				controlleur.setNom(request.getControllleur());
				controlleur.setCreatedAt(new Date());
				controlleur.setUpdatedAt(new Date());
				projetControlleurDAO.store(controlleur);
				projet.setProjetControlleur(controlleur);
			}
		}

		if (!maitreDouvrageDAO.show(request.getMaitreDoeuvrage()).isPresent()) {

			MaitreDouvrage maitreDouvrage = new MaitreDouvrage();

			Institution institution = institutionDAO.show(request.getMaitreDoeuvrage()).get();
			maitreDouvrage.setNom(institution.getNom());
			maitreDouvrage.setDescription(institution.getDescription());
			maitreDouvrage.setCreatedAt(new Date());
			maitreDouvrage.setUpdatedAt(new Date());
			maitreDouvrage.setSlug(request.getMaitreDoeuvrage());
			maitreDouvrage.setInstitution(institution);
			maitreDouvrageDAO.store(maitreDouvrage);
			projet.getMaitreDouvrage().add(maitreDouvrage);
		} else {
			MaitreDouvrage maitreDouvrage = maitreDouvrageDAO.show(request.getMaitreDoeuvrage()).get();
			projet.getMaitreDouvrage().add(maitreDouvrage);

		}

		/*
		 * 
		 * if (soumissionaireR != null) { for (String soumissionaire : soumissionaireR)
		 * { MaitreDoeuvre soumissionaireObjet =
		 * maitreDoeuvreDAO.getOneByNom(soumissionaire);
		 * maitreDoeuvres.add(soumissionaireObjet); }
		 * 
		 * projet.getSoumissionaires().addAll(maitreDoeuvres); }
		 */

		if (request.getMaitreDeouvreDelegue() != null) {
			if (maitreDoeuvreDelegueDAO.getOneByName(request.getMaitreDeouvreDelegue()) == null) {
				doeuvreDelegue.setNom(request.getMaitreDeouvreDelegue());
				doeuvreDelegue.setCreatedAt(new Date());
				doeuvreDelegue.setUpdatedAt(new Date());
				doeuvreDelegue.setDeletedAt(null);
				maitreDoeuvreDelegueDAO.store(doeuvreDelegue);
				projet.setMaitreDoeuvreDelegue(doeuvreDelegue);

			} else {
				doeuvreDelegue = maitreDoeuvreDelegueDAO.getOneByName(request.getMaitreDeouvreDelegue());
				projet.setMaitreDoeuvreDelegue(doeuvreDelegue);
			}
		}

		if (request.getMaitreDeouvre() != null) {
			if (maitreDoeuvreDAO.getOneByNom(request.getMaitreDeouvre()) == null) {
				doeuvre.setNom(request.getMaitreDeouvre());
				doeuvre.setCreatedAt(new Date());
				doeuvre.setUpdatedAt(new Date());
				doeuvre.setDeletedAt(null);
				maitreDoeuvreDAO.store(doeuvre);
				projet.setMaitreDoeuvre(doeuvre);
			} else {
				doeuvre = maitreDoeuvreDAO.getOneByNom(request.getMaitreDeouvre());
				projet.setMaitreDoeuvre(doeuvre);
			}
		}

		TypeMarche typeMarche = typeMacheDAO.show(request.getTypeMarche()).get();
		if (request.getRegion() != null) {
			Set<Region> regionCollection = new HashSet<>();
			for (String regionRequested : request.getRegion()) {
				Region region = regionDAO.getOneByNom(regionRequested);
				regionCollection.add(region);
			}
			projet.setRegions(regionCollection);
		}

		projet.setTypeMarche(typeMarche);

		projet.setResponsable(employe);
		groupeTravail.setProjet(projet);
		HashMap<String, Object> objMap = new HashMap<String, Object>();
		projetDAO.store(projet);
		groupeTravailDAO.store(groupeTravail);

		/**
		 * 
		 * if (caraTechniques != null) { Set<CatarteristiqueTechnique>
		 * catarteristiqueTechniques = new HashSet<CatarteristiqueTechnique>(); for
		 * (CatarteristiqueTechnique caraT : caraTechniques) {
		 * caraT.setSlug(Slugger.createSlug(caraT.getLibelle())); caraT.setCreatedAt(new
		 * Date()); caraT.setUpdatedAt(new Date()); caraT.setProjet(projet);
		 * catacteristiqueTechniqueDAO.store(caraT); //
		 * catarteristiqueTechniques.add(caraT); } //
		 * catacteristiqueTechniqueRepo.saveAll(catarteristiqueTechniques); //
		 * projet.getCatarteristiqueTechniques().addAll(catarteristiqueTechniques); }
		 */

		objMap.put("projet", projet);
		// objMap.put("catarteristiqueTechniques", catacteristiqueTechniques);

		return ResponseEntity.ok(new JsonObjectResponse(true, "Projet ajouté avec succès", objMap));
	}

}
