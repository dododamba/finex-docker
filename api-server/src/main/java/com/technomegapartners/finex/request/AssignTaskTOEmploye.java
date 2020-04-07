/**
 * 
 */
package com.technomegapartners.finex.request;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

/**
 * @author dominiquedamba
 *
 */

@JsonDeserialize(as = AssignTaskTOEmploye.class)

public class AssignTaskTOEmploye {

	private String nom;
	private String description;
	private String priorite;
	private String planificateurSlug;
	private Set<String> exceuteurSlug = new HashSet<>();
	private String projetSlug; 
	private String etapeSlug;
	private Date dateDebut;
	private Date dateFin;
	private double cout;
	private String groupeTravail;
	private String etat;

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
	 * @return the priorite
	 */
	public String getPriorite() {
		return priorite;
	}

	/**
	 * @param priorite the priorite to set
	 */
	public void setPriorite(String priorite) {
		this.priorite = priorite;
	}

	/**
	 * @return the planificateurSlug
	 */
	public String getPlanificateurSlug() {
		return planificateurSlug;
	}

	/**
	 * @param planificateurSlug the planificateurSlug to set
	 */
	public void setPlanificateurSlug(String planificateurSlug) {
		this.planificateurSlug = planificateurSlug;
	}

	/**
	 * @return the exceuteurSlug
	 */
	public Set<String> getExceuteurSlug() {
		return exceuteurSlug;
	}

	/**
	 * @param exceuteurSlug the exceuteurSlug to set
	 */
	public void setExceuteurSlug(Set<String> exceuteurSlug) {
		this.exceuteurSlug = exceuteurSlug;
	}

	/**
	 * @return the projetSlug
	 */
	public String getProjetSlug() {
		return projetSlug;
	}

	/**
	 * @param projetSlug the projetSlug to set
	 */
	public void setProjetSlug(String projetSlug) {
		this.projetSlug = projetSlug;
	}

	/**
	 * @return the etapeSlug
	 */
	public String getEtapeSlug() {
		return etapeSlug;
	}

	/**
	 * @param etapeSlug the etapeSlug to set
	 */
	public void setEtapeSlug(String etapeSlug) {
		this.etapeSlug = etapeSlug;
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
	 * @return the cout
	 */
	public double getCout() {
		return cout;
	}

	/**
	 * @param cout the cout to set
	 */
	public void setCout(double cout) {
		this.cout = cout;
	}

	/**
	 * @return the groupeTravail
	 */
	public String getGroupeTravail() {
		return groupeTravail;
	}

	/**
	 * @param groupeTravail the groupeTravail to set
	 */
	public void setGroupeTravail(String groupeTravail) {
		this.groupeTravail = groupeTravail;
	}

	
}
