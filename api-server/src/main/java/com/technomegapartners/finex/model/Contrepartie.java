/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author dominique
 *
 */
@Entity
@Table(name = "tb_tmp_finex_contreparties")
public class Contrepartie    implements Serializable {
    /**
    *
    */
   private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private double somme;
	private double taux;
	private Date anneeBudgetaire;
	private String lingeBugetaire;
	private String objectDepense;
	@OneToOne
	@JsonIgnore
	private Financement financement;
	
	public Contrepartie() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getSomme() {
		return somme;
	}

	public void setSomme(double somme) {
		this.somme = somme;
	}

	public double getTaux() {
		return taux;
	}

	public void setTaux(double taux) {
		this.taux = taux;
	}

	public Financement getFinancement() {
		return financement;
	}

	public void setFinancement(Financement financement) {
		this.financement = financement;
	}

	public Date getAnneeBudgetaire() {
		return anneeBudgetaire;
	}

	public void setAnneeBudgetaire(Date anneeBudgetaire) {
		this.anneeBudgetaire = anneeBudgetaire;
	}

	public String getLingeBugetaire() {
		return lingeBugetaire;
	}

	public void setLingeBugetaire(String lingeBugetaire) {
		this.lingeBugetaire = lingeBugetaire;
	}

	public String getObjectDepense() {
		return objectDepense;
	}

	public void setObjectDepense(String objectDepense) {
		this.objectDepense = objectDepense;
	}

	
	

}
