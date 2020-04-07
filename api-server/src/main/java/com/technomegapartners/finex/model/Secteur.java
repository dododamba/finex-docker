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
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author DOMINIQUE DAMBA
 *
 */

@Entity
@Table(name = "tb_tmp_finex_secteurs" ,
	uniqueConstraints = { @UniqueConstraint(columnNames = { "nom" }) })

public class Secteur implements Serializable {
	
	/**
	 * 
	 */
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	@Column(length = 5000)
	private String description;
	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;
	
	@OneToMany
	@JsonIgnore
	private Set<Projet> projets = new HashSet<Projet>();
	
	public Secteur() {
		// TODO Auto-generated constructor stub
	}

	public Secteur(String nom, String description, String slug, Date createdAt, Date updatedAt, Date deletedAt) {
		this.nom = nom;
		this.description = description;
		this.slug = slug;
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
	 * @return the nom
	 */
	public String getNom() {
		return nom;
	}

	/**
	 * @param nom the nom to set
	 */
	public void setNom(String nom) {
		this.nom = nom;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
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
	 * @return the projets
	 */
	public Set<Projet> getProjets() {
		return projets;
	}

	/**
	 * @param projets the projets to set
	 */
	public void setProjets(Set<Projet> projets) {
		this.projets = projets;
	}
	
	

}
