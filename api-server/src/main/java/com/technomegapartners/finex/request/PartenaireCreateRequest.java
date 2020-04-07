/**
 * 
 */
package com.technomegapartners.finex.request;

import javax.validation.constraints.NotEmpty;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public class PartenaireCreateRequest {
	@NotEmpty
	private String nom;
	@NotEmpty
	private String typePartenaireSlug;

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getTypePartenaireSlug() {
		return typePartenaireSlug;
	}

	public void setTypePartenaireSlug(String typePartenaireSlug) {
		this.typePartenaireSlug = typePartenaireSlug;
	}

}
