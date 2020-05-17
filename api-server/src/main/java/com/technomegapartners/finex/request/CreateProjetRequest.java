/**
 * 
 */
package com.technomegapartners.finex.request;

import java.util.Date;

import org.json.JSONObject;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.technomegapartners.finex.model.CatarteristiqueTechnique;
import com.technomegapartners.finex.model.Region;
import com.technomegapartners.finex.model.Objectif;

/**
 * @author dominiquedamba
 *
 */
public class CreateProjetRequest {

	private String nom;
	private int numeroProjet;
	private String description;
	private String convention;
	@DateTimeFormat(pattern = "dd.MM.yyyy")
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date dateDebut;
	@DateTimeFormat(pattern = "dd.MM.yyyy")
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date dateFin;
	private double budget;
	private String responsable;
	//private String[] soumissionaire;
	private String maitreDoeuvrage;
	private CatarteristiqueTechnique[] caracteristiqueTechniques;
	private String celluleDexecution;
	private String secteur;
	private String controllleur;
	
	private Objectif[] objectifs;

	private String maitreDeouvreDelegue;
	private String maitreDeouvre;
	private String[] region;
    private String typeMarche;
    
    

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public int getNumeroProjet() {
		return numeroProjet;
	}

	public void setNumeroProjet(int numeroProjet) {
		this.numeroProjet = numeroProjet;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getConvention() {
		return convention;
	}

	public void setConvention(String convention) {
		this.convention = convention;
	}

	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public Date getDateFin() {
		return dateFin;
	}

	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}

	public double getBudget() {
		return budget;
	}

	public void setBudget(double budget) {
		this.budget = budget;
	}

	public String getResponsable() {
		return responsable;
	}

	public void setResponsable(String responsable) {
		this.responsable = responsable;
	}

	

	public String getMaitreDoeuvrage() {
		return maitreDoeuvrage;
	}

	public void setMaitreDoeuvrage(String maitreDoeuvrage) {
		this.maitreDoeuvrage = maitreDoeuvrage;
	}

	public String getSecteur() {
		return secteur;
	}

	public void setSecteur(String secteur) {
		this.secteur = secteur;
	}

	public String getControllleur() {
		return controllleur;
	}

	public void setControllleur(String controllleur) {
		this.controllleur = controllleur;
	}

	public CatarteristiqueTechnique[] getCaracteristiqueTechniques() {
		return caracteristiqueTechniques;
	}

	public void setCaracteristiqueTechniques(CatarteristiqueTechnique[] caracteristiqueTechniques) {
		this.caracteristiqueTechniques = caracteristiqueTechniques;
	}

	public String getCelluleDexecution() {
		return celluleDexecution;
	}

	public void setCelluleDexecution(String celluleDexecution) {
		this.celluleDexecution = celluleDexecution;
	}

	public String getMaitreDeouvreDelegue() {
		return maitreDeouvreDelegue;
	}

	public void setMaitreDeouvreDelegue(String maitreDeouvreDelegue) {
		this.maitreDeouvreDelegue = maitreDeouvreDelegue;
	}

	public String getMaitreDeouvre() {
		return maitreDeouvre;
	}

	public void setMaitreDeouvre(String maitreDeouvre) {
		this.maitreDeouvre = maitreDeouvre;
	}

	


	public String[] getRegion() {
		return region;
	}

	public void setRegion(String[] region) {
		this.region = region;
	}

	public String getTypeMarche() {
		return typeMarche;
	}

	public void setTypeMarche(String typeMarche) {
		this.typeMarche = typeMarche;
	}
	
	public Objectif[] getObjectifs() {
		return objectifs;
	}

	public void setObjectifs(Objectif[] objectifs) {
		this.objectifs = objectifs;
	}
	

}
