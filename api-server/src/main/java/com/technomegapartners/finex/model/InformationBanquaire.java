/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;

import javax.persistence.Entity;
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
@Table(name = "tb_tmp_finex_information_banquaires")
public class InformationBanquaire  implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomBanque;
	private String numeroCompte;
	private String codeSwift;
	private String adresse;
	private String slug;
	private String information;
	
	
	@OneToOne
	@JsonIgnore
	private Entreprise entreprise;


	/**
	 * 
	 */
	public InformationBanquaire() {
		// TODO Auto-generated constructor stub
	}

	
	

	public InformationBanquaire(String nomBanque, String numeroCompte, String codeSwift, String adresse, String slug,
			String information, Entreprise entreprise) {
		this.nomBanque = nomBanque;
		this.numeroCompte = numeroCompte;
		this.codeSwift = codeSwift;
		this.adresse = adresse;
		this.slug = slug;
		this.information = information;
		this.entreprise = entreprise;
	}




	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
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


	public String getAdresse() {
		return adresse;
	}


	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}


	public String getInformation() {
		return information;
	}


	public void setInformation(String information) {
		this.information = information;
	}



	public Entreprise getEntreprise() {
		return entreprise;
	}


	public void setEntreprise(Entreprise entreprise) {
		this.entreprise = entreprise;
	}




	public String getSlug() {
		return slug;
	}




	public void setSlug(String slug) {
		this.slug = slug;
	}
	
	
	
	

}
