/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author Dominique DAMBA
 *
 */
@Entity
@Table(name = "tb_tmp_finex_projets")

public class Projet implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private double budgetPrevisionel;
	private double budgetReel;
	private int numeroProjet;
	@Column(length = 5000)
	private String description;
	private Date dateDebut;
	private Date dateFin;
	private String celluleDexecution;
	
	private Date dateLivraison;
	private EtatProjet etat;
	
	@ManyToOne
	private TypeMarche typeMarche;

	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "projet")
	private Set<Fichier> pieceJointes = new HashSet<>();

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "projet")
	@JsonIgnore
	private Set<GroupeTravail> groupeTravail = new HashSet<>();

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Employe responsable;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "projet")
	private Set<Financement> financements = new HashSet<>();

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "projet")
    private  Set<Etape> etapes = new HashSet<>();
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "projet")
	@JsonIgnore
	private Set<Tirage> tirages = new HashSet<>();

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "projet")
	private Set<CatarteristiqueTechnique> catarteristiqueTechniques = new HashSet<>();

	@ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "tb_tmp_finex_projet_maitredouvrages", joinColumns = @JoinColumn(name = "projet_id"), inverseJoinColumns = @JoinColumn(name = "maitredouvrage_id"))
	private Set<MaitreDouvrage> maitreDouvrage = new HashSet<>();


	
	@ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "tb_tmp_finex_projet_entreprises", joinColumns = @JoinColumn(name = "projet_id"), inverseJoinColumns = @JoinColumn(name = "entreprise_id"))

	private Set<Entreprise> entreprises = new HashSet<>();

	@ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "tb_tmp_finex_projet_regions", joinColumns = @JoinColumn(name = "projet_id"), inverseJoinColumns = @JoinColumn(name = "region_id"))

	private Set<Region> regions = new HashSet<>();

	
	
	@ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "tb_tmp_finex_projet_partenaires", joinColumns = @JoinColumn(name = "projet_id"), inverseJoinColumns = @JoinColumn(name = "partenaire_id"))
	private Set<Partenaire> partenaires = new HashSet<>();

	
	@ManyToOne
	private Secteur secteur;
	
	@ManyToOne
	private MaitreDoeuvre maitreDoeuvre;

	@ManyToOne
	private ProjetControlleur projetControlleur;
	
	@ManyToOne
	private MaitreDoeuvreDelegue maitreDoeuvreDelegue;
	
	@OneToMany(mappedBy = "projet")
	@JsonIgnore
    private Set<DemandeDecaissement> demandeDecaissements = new HashSet<>();
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "projet")
    private  Set<Controle> controles = new HashSet<>();
	
	
	public Projet() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param nom
	 * @param budgetPrevisionel
	 * @param budgetReel
	 * @param description
	 * @param dateDebut
	 * @param dateFin
	 * @param slug
	 */
	public Projet(String nom, double budgetPrevisionel, double budgetReel, String description, Date dateDebut,
			Date dateFin, @NotBlank String slug) {
		this.nom = nom;
		this.budgetPrevisionel = budgetPrevisionel;
		this.budgetReel = budgetReel;
		this.description = description;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.slug = slug;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public double getBudgetPrevisionel() {
		return budgetPrevisionel;
	}

	public void setBudgetPrevisionel(double budgetPrevisionel) {
		this.budgetPrevisionel = budgetPrevisionel;
	}

	public double getBudgetReel() {
		return budgetReel;
	}

	public void setBudgetReel(double budgetReel) {
		this.budgetReel = budgetReel;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public Date getDateFin() {
		return dateFin;
	}

	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}

	public String getSlug() {
		return slug;
	}

	public void setSlug(String slug) {
		this.slug = slug;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Date getDeletedAt() {
		return deletedAt;
	}

	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	public Set<Fichier> getPieceJointes() {
		return pieceJointes;
	}

	public void setPieceJointes(Set<Fichier> appelDoffres) {
		this.pieceJointes = appelDoffres;
	}

	public Set<GroupeTravail> getGroupeTravail() {
		return groupeTravail;
	}

	public void setGroupeTravail(Set<GroupeTravail> groupeTravail) {
		this.groupeTravail = groupeTravail;
	}

	public Employe getResponsable() {
		return responsable;
	}

	public void setResponsable(Employe responsable) {
		this.responsable = responsable;
	}

	public Set<Financement> getFinancements() {
		return financements;
	}

	public void setFinancements(Set<Financement> financements) {
		this.financements = financements;
	}

	public Set<MaitreDouvrage> getMaitreDouvrage() {
		return maitreDouvrage;
	}

	public void setMaitreDouvrage(Set<MaitreDouvrage> maitreDouvrage) {
		this.maitreDouvrage = maitreDouvrage;
	}


	public Set<Partenaire> getPartenaires() {
		return partenaires;
	}

	public void setPartenaires(Set<Partenaire> partenaires) {
		this.partenaires = partenaires;
	}

	public Set<Tirage> getDecaissements() {
		return tirages;
	}

	public void setDecaissements(Set<Tirage> tirages) {
		this.tirages = tirages;
	}

	/**
	 * @return the catarteristiqueTechniques
	 */
	public Set<CatarteristiqueTechnique> getCatarteristiqueTechniques() {
		return catarteristiqueTechniques;
	}

	/**
	 * @param catarteristiqueTechniques the catarteristiqueTechniques to set
	 */
	public void setCatarteristiqueTechniques(Set<CatarteristiqueTechnique> catarteristiqueTechniques) {
		this.catarteristiqueTechniques = catarteristiqueTechniques;
	}

	/**
	 * @return the Secteur
	 */
	public Secteur getSecteur() {
		return secteur;
	}

	/**
	 * @param Secteur the Secteur to set
	 */
	public void setSecteur(Secteur secteur) {
		this.secteur = secteur;
	}

	/**
	 * @return the numeroProjet
	 */
	public int getNumeroProjet() {
		return numeroProjet;
	}

	/**
	 * @param numeroProjet the numeroProjet to set
	 */
	public void setNumeroProjet(int numeroProjet) {
		this.numeroProjet = numeroProjet;
	}



	/**
	 * @return the projetControlleur
	 */
	public ProjetControlleur getProjetControlleur() {
		return projetControlleur;
	}

	/**
	 * @param projetControlleur the projetControlleur to set
	 */
	public void setProjetControlleur(ProjetControlleur projetControlleur) {
		this.projetControlleur = projetControlleur;
	}

	/**
	 * @return the etapes
	 */
	public Set<Etape> getEtapes() {
		return etapes;
	}

	/**
	 * @param etapes the etapes to set
	 */
	public void setEtapes(Set<Etape> etapes) {
		this.etapes = etapes;
	}

	public String getCelluleDexecution() {
		return celluleDexecution;
	}

	public void setCelluleDexecution(String celluleDexecution) {
		this.celluleDexecution = celluleDexecution;
	}

	public TypeMarche getTypeMarche() {
		return typeMarche;
	}

	public void setTypeMarche(TypeMarche typeMarche) {
		this.typeMarche = typeMarche;
	}

	

	public Set<Entreprise> getEntreprises() {
		return entreprises;
	}

	public void setEntreprises(Set<Entreprise> entreprises) {
		this.entreprises = entreprises;
	}

	public MaitreDoeuvreDelegue getMaitreDoeuvreDelegue() {
		return maitreDoeuvreDelegue;
	}

	public void setMaitreDoeuvreDelegue(MaitreDoeuvreDelegue maitreDoeuvreDelegue) {
		this.maitreDoeuvreDelegue = maitreDoeuvreDelegue;
	}

	public Set<Region> getRegions() {
		return regions;
	}

	public void setRegions(Set<Region> regions) {
		this.regions = regions;
	}

	public EtatProjet getEtat() {
		return etat;
	}

	public void setEtat(EtatProjet etat) {
		this.etat = etat;
	}

	public MaitreDoeuvre getMaitreDoeuvre() {
		return maitreDoeuvre;
	}

	public void setMaitreDoeuvre(MaitreDoeuvre maitreDoeuvre) {
		this.maitreDoeuvre = maitreDoeuvre;
	}

	public Set<DemandeDecaissement> getDemandeDecaissements() {
		return demandeDecaissements;
	}

	public void setDemandeDecaissements(Set<DemandeDecaissement> demandeDecaissements) {
		this.demandeDecaissements = demandeDecaissements;
	}

	public Set<Controle> getControles() {
		return controles;
	}

	public void setControles(Set<Controle> controles) {
		this.controles = controles;
	}

	/**
	 * @return the dateLivraison
	 */
	public Date getDateLivraison() {
		return dateLivraison;
	}

	/**
	 * @param dateLivraison the dateLivraison to set
	 */
	public void setDateLivraison(Date dateLivraison) {
		this.dateLivraison = dateLivraison;
	}

	/**
	 * @return the tirages
	 */
	public Set<Tirage> getTirages() {
		return tirages;
	}

	/**
	 * @param tirages the tirages to set
	 */
	public void setTirages(Set<Tirage> tirages) {
		this.tirages = tirages;
	}
	
	
	
	

	
}
