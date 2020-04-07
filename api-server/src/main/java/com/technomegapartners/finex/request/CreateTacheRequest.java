/**
 * 
 */
package com.technomegapartners.finex.request;

import java.util.Date;

/**
 * @author Dominique DAMBA
 *
 */
public class CreateTacheRequest {
	private String nom;
	private String etape;
	private String executant;
	private String planificateur;
	private String projet;
	private Date dateDebut;
	private Date dateFin;
	private String description;
	private String[] images;
	private String[] fichiers;

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
	 * @return the etape
	 */
	public String getEtape() {
		return etape;
	}

	/**
	 * @param etape the etape to set
	 */
	public void setEtape(String etape) {
		this.etape = etape;
	}

	/**
	 * @return the executant
	 */
	public String getExecutant() {
		return executant;
	}

	/**
	 * @param executant the executant to set
	 */
	public void setExecutant(String executant) {
		this.executant = executant;
	}

	/**
	 * @return the planificateur
	 */
	public String getPlanificateur() {
		return planificateur;
	}

	/**
	 * @param planificateur the planificateur to set
	 */
	public void setPlanificateur(String planificateur) {
		this.planificateur = planificateur;
	}

	/**
	 * @return the projet
	 */
	public String getProjet() {
		return projet;
	}

	/**
	 * @param projet the projet to set
	 */
	public void setProjet(String projet) {
		this.projet = projet;
	}

	/**
	 * @return the dateDebut
	 */
	public Date getDateDebut() {
		return dateDebut;
	}

	/**
	 * @param dateDebut the dateDebut to set
	 */
	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	/**
	 * @return the dateFin
	 */
	public Date getDateFin() {
		return dateFin;
	}

	/**
	 * @param dateFin the dateFin to set
	 */
	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
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
	 * @return the images
	 */
	public String[] getImages() {
		return images;
	}

	/**
	 * @param images the images to set
	 */
	public void setImages(String[] images) {
		this.images = images;
	}

	/**
	 * @return the fichiers
	 */
	public String[] getFichiers() {
		return fichiers;
	}

	/**
	 * @param fichiers the fichiers to set
	 */
	public void setFichiers(String[] fichiers) {
		this.fichiers = fichiers;
	}

} 
