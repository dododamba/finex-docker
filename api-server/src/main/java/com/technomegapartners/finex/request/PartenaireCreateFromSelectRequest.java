package com.technomegapartners.finex.request;

public class PartenaireCreateFromSelectRequest {
	private String projet;
	private String[] partenaire;

	public String getProjet() {
		return projet;
	}

	public void setProjet(String projet) {
		this.projet = projet;
	}

	public String[] getPartenaire() {
		return partenaire;
	}

	public void setPartenaire(String[] partenaire) {
		this.partenaire = partenaire;
	}

}
