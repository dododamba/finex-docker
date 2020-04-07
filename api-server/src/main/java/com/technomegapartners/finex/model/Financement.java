/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author dominique
 *
 */
@Entity
@Table(name = "tb_tmp_finex_financements")

public class Financement implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String libelle;
	private double montantTotal;
	private double montantEncaisse;
	private double montantRestant;

	private Date dateSignature;

	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	@OneToOne(mappedBy = "financement")
	private Contrepartie contrepartie;

	private String device;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private TypeFinancement typeFinancement;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "tb_tmp_finex_financement_partenaires", 
	joinColumns = @JoinColumn(name = "financement_id"), 
	inverseJoinColumns = @JoinColumn(name = "partenaire_id"))
	private Set<Partenaire> partenaires = new HashSet<>();

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private Projet projet;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "financement")
	private Set<Encaissement> encaissements = new HashSet<>();

	public Financement(String libelle, double montantTotal, double montantEncaisse, double montantRestant,
			Date dateSignature, String slug, Projet projet) {
		this.libelle = libelle;
		this.montantTotal = montantTotal;
		this.montantEncaisse = montantEncaisse;
		this.montantRestant = montantRestant;
		this.dateSignature = dateSignature;
		this.slug = slug;
		this.projet = projet;
	}

	/**
	 * @param montantTotal
	 * @param montantEncaisse
	 * @param montantRestant
	 * @param dateSignature
	 * @param slug
	 */
	public Financement(double montantTotal, double montantEncaisse, double montantRestant, Date dateSignature,
			String slug) {
		super();
		this.montantTotal = montantTotal;
		this.montantEncaisse = montantEncaisse;
		this.montantRestant = montantRestant;
		this.dateSignature = dateSignature;
		this.slug = slug;
	}

	public Financement() {
		// TODO Auto-generated constructor stub
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
	 * @return the montantTotal
	 */
	public double getMontantTotal() {
		return montantTotal;
	}

	/**
	 * @param montantTotal the montantTotal to set
	 */
	public void setMontantTotal(double montantTotal) {
		this.montantTotal = montantTotal;
	}

	/**
	 * @return the montantEncaisse
	 */
	public double getMontantEncaisse() {
		return montantEncaisse;
	}

	/**
	 * @param montantEncaisse the montantEncaisse to set
	 */
	public void setMontantEncaisse(double montantEncaisse) {
		this.montantEncaisse = montantEncaisse;
	}

	/**
	 * @return the montantRestant
	 */
	public double getMontantRestant() {
		return montantRestant;
	}

	/**
	 * @param montantRestant the montantRestant to set
	 */
	public void setMontantRestant(double montantRestant) {
		this.montantRestant = montantRestant;
	}

	/**
	 * @return the dateSignature
	 */
	public Date getDateSignature() {
		return dateSignature;
	}

	/**
	 * @param dateSignature the dateSignature to set
	 */
	public void setDateSignature(Date dateSignature) {
		this.dateSignature = dateSignature;
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
	 * @return the typeFinancement
	 */
	public TypeFinancement getTypeFinancement() {
		return typeFinancement;
	}

	/**
	 * @param typeFinancement the typeFinancement to set
	 */
	public void setTypeFinancement(TypeFinancement typeFinancement) {
		this.typeFinancement = typeFinancement;
	}

	/**
	 * @return the partenaires
	 */
	public Set<Partenaire> getPartenaires() {
		return partenaires;
	}

	/**
	 * @param partenaires the partenaires to set
	 */
	public void setPartenaires(Set<Partenaire> partenaires) {
		this.partenaires = partenaires;
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
	 * @return the encaissements
	 */
	public Set<Encaissement> getEncaissements() {
		return encaissements;
	}

	/**
	 * @param encaissements the encaissements to set
	 */
	public void setEncaissements(Set<Encaissement> encaissements) {
		this.encaissements = encaissements;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public Contrepartie getContrepartie() {
		return contrepartie;
	}

	public void setContrepartie(Contrepartie contrepartie) {
		this.contrepartie = contrepartie;
	}

	public String getDevice() {
		return device;
	}

	public void setDevice(String device) {
		this.device = device;
	}

}
