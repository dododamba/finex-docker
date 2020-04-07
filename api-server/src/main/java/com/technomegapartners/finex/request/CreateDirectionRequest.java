package com.technomegapartners.finex.request;

public class CreateDirectionRequest {
	private String nom;
	private String institution;
	private String nomEmploye;
	private String prenomEmploye;
	private String emailEmploye;
	private String description;

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getInstitution() {
		return institution;
	}

	public void setInstitution(String institution) {
		this.institution = institution;
	}

	public String getNomEmploye() {
		return nomEmploye;
	}

	public void setNomEmploye(String nomEmploye) {
		this.nomEmploye = nomEmploye;
	}

	public String getPrenomEmploye() {
		return prenomEmploye;
	}

	public void setPrenomEmploye(String prenomEmploye) {
		this.prenomEmploye = prenomEmploye;
	}

	public String getEmailEmploye() {
		return emailEmploye;
	}

	public void setEmailEmploye(String emailEmploye) {
		this.emailEmploye = emailEmploye;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
