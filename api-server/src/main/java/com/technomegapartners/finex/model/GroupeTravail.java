package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_tmp_finex_groupe_travails")
public class GroupeTravail implements Serializable {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Employe administrateur;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "tb_tmp_finex_groupe_travails_employes", joinColumns = @JoinColumn(name = "groupe_travail_id"), inverseJoinColumns = @JoinColumn(name = "employe_id"))
	private Set<Employe> membres  = new HashSet<>();

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Projet projet;

	@OneToMany(fetch = FetchType.LAZY,mappedBy = "groupeTavail")
	@JsonIgnore
	private Set<Etape> etapes = new HashSet<>();

	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	public GroupeTravail() {
	}

	public GroupeTravail(String nom, Employe administrarteur, Projet projet, String slug, Date createdAt,
			Date updatedAt, Date deletedAt) {
		super();
		this.nom = nom;
		this.administrateur = administrarteur;
		this.projet = projet;
		this.slug = slug;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
	}

	public GroupeTravail(String nom, Employe administrarteur, Projet projet) {
		super();
		this.nom = nom;
		this.administrateur = administrarteur;
		this.projet = projet;
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

	public Employe getAdministrarteur() {
		return administrateur;
	}

	public void setAdministrarteur(Employe administrarteur) {
		this.administrateur = administrarteur;
	}

	public Set<Employe> getMembres() {
		return membres;
	}

	public void setMembres(Set<Employe> membres) {
		this.membres = membres;
	}

	public Projet getProjet() {
		return projet;
	}

	public void setProjet(Projet projet) {
		this.projet = projet;
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
	
	
	
	

}
