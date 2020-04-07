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
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author dominique
 *
 */
@Entity
@Table(name = "tb_tmp_finex_encaissements")
public class Encaissement extends OperationFiananciere implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Date dateEncaissement;
	private String referencePieceJustificative;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER,targetEntity = Financement.class,optional = true)
	@JsonIgnore
	private Financement financement;

	public Encaissement() {
	}

	/**
	 * @param dateEncaissement
	 * @param financement
	 */
	public Encaissement(Date dateEncaissement, Financement financement) {
		super();
		this.dateEncaissement = dateEncaissement;
		this.financement = financement;
	}

	/**
	 * @return the dateEncaissement
	 */
	public Date getDateEncaissement() {
		return dateEncaissement;
	}

	/**
	 * @param dateEncaissement the dateEncaissement to set
	 */
	public void setDateEncaissement(Date dateEncaissement) {
		this.dateEncaissement = dateEncaissement;
	}

	/**
	 * @return the financement
	 */
	public Financement getFinancement() {
		return financement;
	}

	/**
	 * @param financement the financement to set
	 */
	public void setFinancement(Financement financement) {
		this.financement = financement;
	}

	public String getReferencePieceJustificative() {
		return referencePieceJustificative;
	}

	public void setReferencePieceJustificative(String referencePieceJustificative) {
		this.referencePieceJustificative = referencePieceJustificative;
	}



	
}
