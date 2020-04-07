package com.technomegapartners.finex.request;

import java.util.Date;

public class CreateEtapeForSpecificProjectRequest {
    private String nom;
    private String description;
    private String dateDebut;
    private String dateFin;
    private double cout;
    private String projetSlug;

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

  
	public String getProjetSlug() {
		return projetSlug;
	}

	public void setProjetSlug(String projetSlug) {
		this.projetSlug = projetSlug;
	}

	public String getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(String dateDebut) {
		this.dateDebut = dateDebut;
	}

	public String getDateFin() {
		return dateFin;
	}

	public void setDateFin(String dateFin) {
		this.dateFin = dateFin;
	}

	public double getCout() {
		return cout;
	}

	public void setCout(double cout) {
		this.cout = cout;
	}
    
    
}
