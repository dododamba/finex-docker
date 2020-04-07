package com.technomegapartners.finex.request;

public class EntrepriseFromCreateRequest {
	private String nom;
	private String description;
	private String adresse;
	private String responsable;
	private String raisonSociale;
	private String numeroIdFiscal;

	private String nomBanque;
	private String numeroCompte;
	private String codeSwift;
	private String adresseBanque;
	private String information;

	private String projetRequest;

	public String getProjetRequest() {
		return projetRequest;
	}

	public void setProjetRequest(String projetRequest) {
		this.projetRequest = projetRequest;
	}

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

	public String getNomBanque() {
		return nomBanque;
	}

	public void setNomBanque(String nomBanque) {
		this.nomBanque = nomBanque;
	}

	public String getNumeroCompte() {
		return numeroCompte;
	}

	public void setNumeroCompte(String numeroCompte) {
		this.numeroCompte = numeroCompte;
	}

	public String getCodeSwift() {
		return codeSwift;
	}

	public void setCodeSwift(String codeSwift) {
		this.codeSwift = codeSwift;
	}

	public String getAdresseBanque() {
		return adresseBanque;
	}

	public void setAdresseBanque(String adresseBanque) {
		this.adresseBanque = adresseBanque;
	}

	public String getInformation() {
		return information;
	}

	public void setInformation(String information) {
		this.information = information;
	}

}
