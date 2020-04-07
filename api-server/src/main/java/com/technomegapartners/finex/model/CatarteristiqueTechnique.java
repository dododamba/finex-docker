package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "tb_tmp_finex_caracteristique_techniques", uniqueConstraints = {
		@UniqueConstraint(columnNames = { "slug" }) })

public class CatarteristiqueTechnique implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 8910842798571986581L;

	/**
	 * 
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	private String libelle;

	@NotBlank
	private String valeur;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private Projet projet;
	@NotBlank
	private String slug;
	private String nature;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;
	
	public CatarteristiqueTechnique() {
		// TODO Auto-generated constructor stub
	}

    
	public CatarteristiqueTechnique(@NotBlank String libelle, @NotBlank String valeur, Projet projet,
			@NotBlank String slug, String nature, Date createdAt, Date updatedAt, Date deletedAt) {
		super();
		this.libelle = libelle;
		this.valeur = valeur;
		this.projet = projet;
		this.slug = slug;
		this.nature = nature;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
	}


	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the libelle
	 */
	public String getLibelle() {
		return libelle;
	}

	/**
	 * @param libelle the libelle to set
	 */
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	/**
	 * @return the valeur
	 */
	public String getValeur() {
		return valeur;
	}

	/**
	 * @param valeur the valeur to set
	 */
	public void setValeur(String valeur) {
		this.valeur = valeur;
	}

	/**
	 * @return the projet
	 */
	public Projet getProjet() {
		return projet;
	}

	/**
	 * @param projet the projet to set
	 */
	public void setProjet(Projet projet) {
		this.projet = projet;
	}

	/**
	 * @return the slug
	 */
	public String getSlug() {
		return slug;
	}

	/**
	 * @param slug the slug to set
	 */
	public void setSlug(String slug) {
		this.slug = slug;
	}

	/**
	 * @return the createdAt
	 */
	public Date getCreatedAt() {
		return createdAt;
	}

	/**
	 * @param createdAt the createdAt to set
	 */
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	/**
	 * @return the updatedAt
	 */
	public Date getUpdatedAt() {
		return updatedAt;
	}

	/**
	 * @param updatedAt the updatedAt to set
	 */
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	/**
	 * @return the deletedAt
	 */
	public Date getDeletedAt() {
		return deletedAt;
	}

	/**
	 * @param deletedAt the deletedAt to set
	 */
	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	/**
	 * @return the nature
	 */
	public String getNature() {
		return nature;
	}

	/**
	 * @param nature the nature to set
	 */
	public void setNature(String nature) {
		this.nature = nature;
	}
	
	
	
	
	
	
	

}
