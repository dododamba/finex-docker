/**
 * 
 */
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

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author dominique
 *
 */
@Entity
@Table(name = "tb_tmp_finex_fichiers")
public class Fichier implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String extention;
	private String source;
	private String slug;

	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private Projet projet;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private OperationFiananciere operation;

	public Fichier() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param nom
	 * @param extention
	 * @param source
	 */
	public Fichier(String nom, String extention, String source) {
		this.nom = nom;
		this.extention = extention;
		this.source = source;
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
	 * @return the extention
	 */
	public String getExtention() {
		return extention;
	}

	/**
	 * @param extention the extention to set
	 */
	public void setExtention(String extention) {
		this.extention = extention;
	}

	/**
	 * @return the source
	 */
	public String getSource() {
		return source;
	}

	/**
	 * @param source the source to set
	 */
	public void setSource(String source) {
		this.source = source;
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
	 * @return the operation
	 */
	public OperationFiananciere getOperation() {
		return operation;
	}

	/**
	 * @param operation the operation to set
	 */
	public void setOperation(OperationFiananciere operation) {
		this.operation = operation;
	}

	public String getSlug() {
		return slug;
	}

	public void setSlug(String slug) {
		this.slug = slug;
	}

}
