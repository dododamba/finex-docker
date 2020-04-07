package com.technomegapartners.finex.request;

import javax.persistence.Column;

public class EntrepriseCreateRequest {
	private String nom;
	private String description;
	private String adresse;
	private String responsable;
	private String raisonSociale;
	private String numeroIdFiscal;
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getResponsable() {
		return responsable;
	}
	public void setResponsable(String responsable) {
		this.responsable = responsable;
	}
	public String getRaisonSociale() {
		return raisonSociale;
	}
	public void setRaisonSociale(String raisonSociale) {
		this.raisonSociale = raisonSociale;
	}
	public String getNumeroIdFiscal() {
		return numeroIdFiscal;
	}
	public void setNumeroIdFiscal(String numeroIdFiscal) {
		this.numeroIdFiscal = numeroIdFiscal;
	}
	
	
}
