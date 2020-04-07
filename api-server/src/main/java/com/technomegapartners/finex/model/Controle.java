/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author dominique
 *
 */

@Entity
@Table(name = "tb_tmp_finex_controles")
public class Controle implements Serializable {
	/**
	 * 
	 */

	private static final long serialVersionUID = 2925801180155158618L;
	/**
	 * 
	 */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String libelle;
	@Column(length = 5000)
	private String decription;
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Projet projet;
	@ManyToOne(fetch = FetchType.LAZY)
	private ProjetControlleur controlleur;
	private String slug;

	private Date dateControle;
	private TypeControle typeControle;

	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	public Controle() {
		// TODO Auto-generated constructor stub
	}

	public Controle(String libelle, String decription, Projet projet, ProjetControlleur controlleur, Date dateControle,
			TypeControle typeControle, Date createdAt, Date updatedAt, Date deletedAt) {
		super();
		this.libelle = libelle;
		this.decription = decription;
		this.projet = projet;
		this.controlleur = controlleur;
		this.dateControle = dateControle;
		this.typeControle = typeControle;
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

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public String getDecription() {
		return decription;
	}

	public void setDecription(String decription) {
		this.decription = decription;
	}

	public Projet getProjet() {
		return projet;
	}

	public void setProjet(Projet projet) {
		this.projet = projet;
	}

	public ProjetControlleur getControlleur() {
		return controlleur;
	}

	public void setControlleur(ProjetControlleur controlleur) {
		this.controlleur = controlleur;
	}

	public Date getDateControle() {
		return dateControle;
	}

	public void setDateControle(Date dateControle) {
		this.dateControle = dateControle;
	}

	public TypeControle getTypeControle() {
		return typeControle;
	}

	public void setTypeControle(TypeControle typeControle) {
		this.typeControle = typeControle;
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

	public String getSlug() {
		return slug;
	}

	public void setSlug(String slug) {
		this.slug = slug;
	}
	
	

}
