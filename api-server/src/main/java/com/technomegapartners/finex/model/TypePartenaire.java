/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

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
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author DOMINIQUE DAMBA
 *
 */

@Entity
@Table(name = "tb_tmp_finex_type_partenaires", uniqueConstraints = { @UniqueConstraint(columnNames = { "libelle" }) })
public class TypePartenaire implements Serializable {
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

	@OneToMany(mappedBy = "typePartenaire")
	@JsonIgnore
	private Collection<Partenaire> partenaires;

	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	public TypePartenaire() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param libelle
	 * @param description
	 * @param slug
	 */
	public TypePartenaire(@NotBlank String libelle, @NotBlank String description, @NotBlank String slug) {
		this.libelle = libelle;
		this.description = description;
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
	 * @return the partenaires
	 */
	public Collection<Partenaire> getPartenaires() {
		return partenaires;
	}

	/**
	 * @param partenaires the partenaires to set
	 */
	public void setPartenaires(Collection<Partenaire> partenaires) {
		this.partenaires = partenaires;
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

}
