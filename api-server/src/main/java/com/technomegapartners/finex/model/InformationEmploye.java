/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author DOMINIQUE DAMBA
 *
 */

@Entity
@Table(name = "tb_tmp_finex_information_employes")
public class InformationEmploye implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	private String libelle;

	@NotBlank
	private String valeur;

	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Employe employe;
	@NotBlank
	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	public InformationEmploye() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param libelle
	 * @param valeur
	 * @param employe
	 * @param slug
	 */
	public InformationEmploye(@NotBlank String libelle, @NotBlank String valeur, Employe employe,
			@NotBlank String slug) {
		super();
		this.libelle = libelle;
		this.valeur = valeur;
		this.employe = employe;
		this.slug = slug;
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
	 * @return the employe
	 */
	public Employe getEmploye() {
		return employe;
	}

	/**
	 * @param employe the employe to set
	 */
	public void setEmploye(Employe employe) {
		this.employe = employe;
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
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
