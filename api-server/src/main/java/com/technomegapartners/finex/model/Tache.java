package com.technomegapartners.finex.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_tmp_finex_taches")
public class Tache implements Serializable {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;

	private String description;
	private String slug;
	@OneToMany(mappedBy = "tache")
	private Set<Priorite> priorites = new HashSet<Priorite>();
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Employe planificateur;
	
	@OneToMany(mappedBy="tache")
	private Set<Employe> exceuteur = new HashSet<>();
	
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private Etape etape;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Projet projet;
	@ManyToOne
	private Etat etat;

	@Temporal(TemporalType.DATE)
	private Date dateDebut;
	@Temporal(TemporalType.DATE)
	private Date dateFin;

	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;
	@OneToMany(mappedBy = "tache")
	private Set<Remarque> remarques = new HashSet<Remarque>();
	private double cout;

	public Tache(String nom, String description, String slug, Set<Priorite> priorites, Employe planificateur,
			Set<Employe> exceuteur, Etape etape, Etat etat,double cout, Date dateDebut, Date dateFin, Date createdAt, Date updatedAt,
			Date deletedAt) {
		this.nom = nom;
		this.description = description;
		this.slug = slug;
		this.priorites = priorites;
		this.planificateur = planificateur;
		this.exceuteur = exceuteur;
		this.etape = etape;
		this.etat = etat;
		this.cout = cout;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
	}

	public Tache() {
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSlug() {
		return slug;
	}

	public void setSlug(String slug) {
		this.slug = slug;
	}

	public Set<Priorite> getPriorite() {
		return priorites;
	}

	public void setPriorite(Set<Priorite> priorite) {
		this.priorites = priorite;
	}

	public Employe getPlanificateur() {
		return planificateur;
	}

	public void setPlanificateur(Employe planificateur) {
		this.planificateur = planificateur;
	}

	

	public Set<Employe> getExceuteur() {
		return exceuteur;
	}

	public void setExceuteur(Set<Employe> exceuteur) {
		this.exceuteur = exceuteur;
	}

	public double getCout() {
		return cout;
	}

	public void setCout(double cout) {
		this.cout = cout;
	}

	public Etape getEtape() {
		return etape;
	}

	public void setEtape(Etape etape) {
		this.etape = etape;
	}

	public Projet getProjet() {
		return projet;
	}

	public void setProjet(Projet projet) {
		this.projet = projet;
	}

	public Etat getEtat() {
		return etat;
	}

	public void setEtat(Etat etat) {
		this.etat = etat;
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

	/**
	 * @return the priorites
	 */
	public Set<Priorite> getPriorites() {
		return priorites;
	}

	/**
	 * @param priorites the priorites to set
	 */
	public void setPriorites(Set<Priorite> priorites) {
		this.priorites = priorites;
	}

	/**
	 * @return the remarques
	 */
	public Set<Remarque> getRemarques() {
		return remarques;
	}

	/**
	 * @param remarques the remarques to set
	 */
	public void setRemarques(Set<Remarque> remarques) {
		this.remarques = remarques;
	}
	
	
}
