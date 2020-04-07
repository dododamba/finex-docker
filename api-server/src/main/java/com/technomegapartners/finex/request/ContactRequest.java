/**
 * 
 */
package com.technomegapartners.finex.request;

import javax.validation.constraints.NotBlank;

/**
 * @author dominiquedamba
 *
 */
public class ContactRequest {

	@NotBlank(message = "Veuillez renseignez votre adresse")
	private String adresse;
	@NotBlank(message = "Veuillez renseignez votre numero de portable")
	private String telephone;
	private String fix;
	@NotBlank(message = "Le contact doit lié à un utilisateur")
	private Long userId;

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
	 * @return the telephone
	 */
	public String getTelephone() {
		return telephone;
	}

	/**
	 * @param telephone the telephone to set
	 */
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	/**
	 * @return the fix
	 */
	public String getFix() {
		return fix;
	}

	/**
	 * @param fix the fix to set
	 */
	public void setFix(String fix) {
		this.fix = fix;
	}

	/**
	 * @return the userId
	 */
	public Long getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(Long userId) {
		this.userId = userId;
	}

}
