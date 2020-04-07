package com.technomegapartners.finex.request;

import java.util.Date;

public class CreateControleRequest {
	private String libelle;
	private String decription;
	private String projet;
	private String controlleur;
	private String dateControle;
	private int typeControle;

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public String getDecription() {
		return decription;
	}

	public void setDecription(String decription) {
		this.decription = decription;
	}

	public String getProjet() {
		return projet;
	}

	public void setProjet(String projet) {
		this.projet = projet;
	}

	public String getControlleur() {
		return controlleur;
	}

	public void setControlleur(String controlleur) {
		this.controlleur = controlleur;
	}

	public String getDateControle() {
		return dateControle;
	}

	public void setDateControle(String dateControle) {
		this.dateControle = dateControle;
	}

	public int getTypeControle() {
		return typeControle;
	}

	public void setTypeControle(int typeControle) {
		this.typeControle = typeControle;
	}

}
