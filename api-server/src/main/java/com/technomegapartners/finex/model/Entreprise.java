package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "tb_tmp_finex_entreprises")
public class Entreprise implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;

	@Column(length = 1000)
	private String description;
	private String adresse;
	private String responsable;
	private String raisonSociale;
	private String numeroIdFiscal;
	
    @OneToOne(mappedBy = "entreprise")
	private InformationBanquaire banquaire;

	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	@OneToMany(mappedBy = "entreprise")
	@JsonIgnore
    private Set<DemandeDecaissement> demandeDecaissements = new HashSet<>();
	
	
	public Entreprise() {
		// TODO Auto-generated constructor stub
	}


	public Entreprise(String nom, String description, String responsable, String raisonSociale, String numeroIdFiscal,
			InformationBanquaire banquaire, String slug, Date createdAt, Date updatedAt, Date deletedAt) {
		super();
		this.nom = nom;
		this.description = description;
		this.responsable = responsable;
		this.raisonSociale = raisonSociale;
		this.numeroIdFiscal = numeroIdFiscal;
		this.banquaire = banquaire;
		this.slug = slug;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
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


	public String getResponsable() {
		return responsable;
	}


	public void setResponsable(String responsable) {
		this.responsable = responsable;
	}


	public String getRaisonSociale() {
		return raisonSociale;
	}


	public void setRaisonSociale(String raisonSociale) {
		this.raisonSociale = raisonSociale;
	}


	public String getNumeroIdFiscal() {
		return numeroIdFiscal;
	}


	public void setNumeroIdFiscal(String numeroIdFiscal) {
		this.numeroIdFiscal = numeroIdFiscal;
	}


	public InformationBanquaire getBanquaire() {
		return banquaire;
	}


	public void setBanquaire(InformationBanquaire banquaire) {
		this.banquaire = banquaire;
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


	public String getAdresse() {
		return adresse;
	}


	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	
	

}
