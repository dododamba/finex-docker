/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.*;

/**
 * @author dominique
 *
 */
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)

public abstract class OperationFiananciere implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)

	private Long id;
	private Date DateSignature;
	private double montant;
 
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "operation")
	private Collection<Fichier> piecesJointes;

	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	public OperationFiananciere() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param dateSignature
	 * @param montant
	 */
	public OperationFiananciere(Date dateSignature, double montant) {
		DateSignature = dateSignature;
		this.montant = montant;
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
	 * @return the dateSignature
	 */
	public Date getDateSignature() {
		return DateSignature;
	}

	/**
	 * @param dateSignature the dateSignature to set
	 */
	public void setDateSignature(Date dateSignature) {
		DateSignature = dateSignature;
	}

	/**
	 * @return the montant
	 */
	public double getMontant() {
		return montant;
	}

	/**
	 * @param montant the montant to set
	 */
	public void setMontant(double montant) {
		this.montant = montant;
	}

	/**
	 * @return the piecesJointes
	 */
	public Collection<Fichier> getPiecesJointes() {
		return piecesJointes;
	}

	/**
	 * @param piecesJointes the piecesJointes to set
	 */
	public void setPiecesJointes(Collection<Fichier> piecesJointes) {
		this.piecesJointes = piecesJointes;
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

	public String getSlug() {
		return slug;
	}

	public void setSlug(String slug) {
		this.slug = slug;
	}

}
