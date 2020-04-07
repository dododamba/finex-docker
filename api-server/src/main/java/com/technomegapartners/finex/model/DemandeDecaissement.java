package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "tb_tmp_finex_demande_decaissements")
public class DemandeDecaissement  implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private double montant;
	private String devise;
	private int methodeDecaissement;
	@Column(length = 6000)
	private String note;
	@Column(length = 6000)
	private String objetDecaissement;
	private Fichier fichier;
	@ManyToOne
	private Projet projet;
	@ManyToOne
	private Entreprise entreprise;
	@ManyToOne
	private MaitreDouvrage maitreDouvrage;
     
	
	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	
	
	public DemandeDecaissement() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getMontant() {
		return montant;
	}

	public void setMontant(double montant) {
		this.montant = montant;
	}

	public String getDevise() {
		return devise;
	}

	public void setDevise(String devise) {
		this.devise = devise;
	}

	public int getMethodeDecaissement() {
		return methodeDecaissement;
	}

	public void setMethodeDecaissement(int methodeDecaissement) {
		this.methodeDecaissement = methodeDecaissement;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Fichier getFichier() {
		return fichier;
	}

	public void setFichier(Fichier fichier) {
		this.fichier = fichier;
	}

	public Projet getProjet() {
		return projet;
	}

	public void setProjet(Projet projet) {
		this.projet = projet;
	}

	public Entreprise getEntreprise() {
		return entreprise;
	}

	public void setEntreprise(Entreprise entreprise) {
		this.entreprise = entreprise;
	}

	public MaitreDouvrage getMaitreDouvrage() {
		return maitreDouvrage;
	}

	public void setMaitreDouvrage(MaitreDouvrage maitreDouvrage) {
		this.maitreDouvrage = maitreDouvrage;
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
	
	

}
