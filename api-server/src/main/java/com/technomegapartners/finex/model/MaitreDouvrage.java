package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Collection;
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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_tmp_finex_maitre_douvrages", uniqueConstraints = { @UniqueConstraint(columnNames = { "nom" }) })
public class MaitreDouvrage implements Serializable {
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

	@OneToMany(mappedBy = "maitreDouvrage", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private Collection<Tirage> tirages;

	@OneToOne(mappedBy = "maitreDouvrage")
	private Institution institution;

	@OneToMany(mappedBy = "maitreDouvrage")
	@JsonIgnore
	private Set<DemandeDecaissement> demandeDecaissements = new HashSet<>();

	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	public MaitreDouvrage() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param nom
	 * @param description
	 */
	public MaitreDouvrage(String nom, String description) {
		this.nom = nom;
		this.description = description;
	}

	/**
	 * @return the tirages
	 */
	public Collection<Tirage> getDecaissements() {
		return tirages;
	}

	/**
	 * @param tirages the tirages to set
	 */
	public void setDecaissements(Collection<Tirage> tirages) {
		this.tirages = tirages;
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

	public Institution getInstitution() {
		return institution;
	}

	public void setInstitution(Institution institution) {
		this.institution = institution;
	}

	public Set<DemandeDecaissement> getDemandeDecaissements() {
		return demandeDecaissements;
	}

	public void setDemandeDecaissements(Set<DemandeDecaissement> demandeDecaissements) {
		this.demandeDecaissements = demandeDecaissements;
	}

	
}
