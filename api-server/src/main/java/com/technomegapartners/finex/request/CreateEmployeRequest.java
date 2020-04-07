/**
 * 
 */
package com.technomegapartners.finex.request;

import javax.validation.constraints.NotBlank;

import com.technomegapartners.finex.model.Employe;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public class CreateEmployeRequest {
	// @NotBlank(message = "Les information de l'employé sont insuffisantes")
	private Employe employe;
	@NotBlank(message = "Selection une direction")
	private String directionSlug;

	/**
	 * @return the employe
	 */
	public Employe getEmploye() {
		return employe;
	}

	/**
	 * @param employe the employe to set
	 */
	public void setEmploye(Employe employe) {
		this.employe = employe;
	}

	/**
	 * @return the directionRequest
	 */
	public String getDirectionSlug() {
		return directionSlug;
	}

	/**
	 * @param directionRequest the directionRequest to set
	 */
	public void setDirectionSlug(String directionSlug) {
		this.directionSlug = directionSlug;
	}

}
