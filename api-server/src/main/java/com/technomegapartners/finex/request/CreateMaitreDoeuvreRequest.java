/**
 * 
 */
package com.technomegapartners.finex.request;

/**
 * @author dominique
 *
 */
public class CreateMaitreDoeuvreRequest {
	private String nom;
	private String description;
	private String responsable;
	private String raisonSociale;
	private String numeroIdFiscal;
	private String nomBanque;
	private String numeroCompte;
	private String codeSwift;
	private String adresse;
	private String information;

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
	 * @return the responsable
	 */
	public String getResponsable() {
		return responsable;
	}

	/**
	 * @param responsable the responsable to set
	 */
	public void setResponsable(String responsable) {
		this.responsable = responsable;
	}

	/**
	 * @return the raisonSociale
	 */
	public String getRaisonSociale() {
		return raisonSociale;
	}

	/**
	 * @param raisonSociale the raisonSociale to set
	 */
	public void setRaisonSociale(String raisonSociale) {
		this.raisonSociale = raisonSociale;
	}

	/**
	 * @return the numeroIdFiscal
	 */
	public String getNumeroIdFiscal() {
		return numeroIdFiscal;
	}

	/**
	 * @param numeroIdFiscal the numeroIdFiscal to set
	 */
	public void setNumeroIdFiscal(String numeroIdFiscal) {
		this.numeroIdFiscal = numeroIdFiscal;
	}

	/**
	 * @return the nomBanque
	 */
	public String getNomBanque() {
		return nomBanque;
	}

	/**
	 * @param nomBanque the nomBanque to set
	 */
	public void setNomBanque(String nomBanque) {
		this.nomBanque = nomBanque;
	}

	/**
	 * @return the numeroCompte
	 */
	public String getNumeroCompte() {
		return numeroCompte;
	}

	/**
	 * @param numeroCompte the numeroCompte to set
	 */
	public void setNumeroCompte(String numeroCompte) {
		this.numeroCompte = numeroCompte;
	}

	/**
	 * @return the codeSwift
	 */
	public String getCodeSwift() {
		return codeSwift;
	}

	/**
	 * @param codeSwift the codeSwift to set
	 */
	public void setCodeSwift(String codeSwift) {
		this.codeSwift = codeSwift;
	}

	/**
	 * @return the adresse
	 */
	public String getAdresse() {
		return adresse;
	}

	/**
	 * @param adresse the adresse to set
	 */
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	/**
	 * @return the information
	 */
	public String getInformation() {
		return information;
	}

	/**
	 * @param information the information to set
	 */
	public void setInformation(String information) {
		this.information = information;
	}

}
