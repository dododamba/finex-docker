package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
@Table(name = "tb_tmp_finex_institutions", uniqueConstraints = { @UniqueConstraint(columnNames = { "nom" }) })
public class Institution implements Serializable {
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

	@ManyToOne
	private Employe employeResponsable;
	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;
	@OneToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY, mappedBy = "institution")
	@JsonIgnore
	private Set<Direction> directions = new HashSet<Direction>();
	
	@OneToOne
	private MaitreDouvrage maitreDouvrage;
	
	public Institution() {
		// TODO Auto-generated constructor stub
	}

	public Institution(String nom, String description, Employe employeResposable, String slug, Date createdAt,
			Date updatedAt, Date deletedAt) {
		super();
		this.nom = nom;
		this.description = description;
		this.employeResponsable = employeResposable;
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
	 * @return the employeResposable
	 */
	public Employe getEmployeResponsable() {
		return employeResponsable;
	}

	/**
	 * @param employeResposable the employeResposable to set
	 */
	public void setEmployeResponsable(Employe employeResposable) {
		this.employeResponsable = employeResposable;
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
	 * @return the directions
	 */
	public Set<Direction> getDirections() {
		return directions;
	}

	/**
	 * @param directions the directions to set
	 */
	public void setDirections(Set<Direction> directions) {
		this.directions = directions;
	}

	/**
	 * @return the maitreDouvrage
	 */
	public MaitreDouvrage getMaitreDouvrage() {
		return maitreDouvrage;
	}

	/**
	 * @param maitreDouvrage the maitreDouvrage to set
	 */
	public void setMaitreDouvrage(MaitreDouvrage maitreDouvrage) {
		this.maitreDouvrage = maitreDouvrage;
	}
	
	
	

}
