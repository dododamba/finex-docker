/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

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
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author DOMINIQUE DAMBA
 *
 */

@Entity
@Table(name = "tb_tmp_finex_directions", uniqueConstraints = { @UniqueConstraint(columnNames = { "libelle" }) })
public class Direction implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Column(name = "libelle")
	private String libelle;

	@NotBlank
	@Column(name = "description")
	private String description;

	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	private Employe responsable;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "direction")
	@JsonIgnore
	private Collection<Employe> employes;
    
	@ManyToOne(fetch = FetchType.LAZY)
	private Institution institution;
	
	@NotBlank
	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;
	
	

	public Direction() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param libelle
	 * @param description
	 * @param responsable
	 * @param slug
	 */
	public Direction(@NotBlank String libelle, @NotBlank String description, Employe responsable,
			@NotBlank String slug) {
		this.libelle = libelle;
		this.description = description;
		this.responsable = responsable;
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
	 * @return the responsable
	 */
	public Employe getResponsable() {
		return responsable;
	}

	/**
	 * @param responsable the responsable to set
	 */
	public void setResponsable(Employe responsable) {
		this.responsable = responsable;
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

	public Collection<Employe> getEmployes() {
		return employes;
	}

	public void setEmployes(Collection<Employe> employes) {
		this.employes = employes;
	}

	public Institution getInstitution() {
		return institution;
	}

	public void setInstitution(Institution institution) {
		this.institution = institution;
	}

	

}
