package com.technomegapartners.finex.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@JsonDeserialize(as = CreateFinancementRequest.class)

public class CreateFinancementRequest {

    private String libelle;
    @DateTimeFormat(pattern = "dd.MM.yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date dateSignature;
    private double montantTotal;
    private String projetSlug;
    private String typeSlug;
    private String partenaireSulg;

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Date getDateSignature() {
        return dateSignature;
    }

    public void setDateSignature(Date dateSignature) {
        this.dateSignature = dateSignature;
    }

    public double getMontantTotal() {
        return montantTotal;
    }

    public void setMontantTotal(double montantTotal) {
        this.montantTotal = montantTotal;
    }

    public String getProjetSlug() {
        return projetSlug;
    }

    public void setProjetSlug(String projetSlug) {
        this.projetSlug = projetSlug;
    }

    public String getTypeSlug() {
        return typeSlug;
    }

    public void setTypeSlug(String typeSlug) {
        this.typeSlug = typeSlug;
    }

    public String getPartenaireSulg() {
        return partenaireSulg;
    }

    public void setPartenaireSulg(String partenaireSulg) {
        this.partenaireSulg = partenaireSulg;
    }
}
