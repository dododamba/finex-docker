/**
 * 
 */
package com.technomegapartners.finex.request;

import java.util.Date;

public class EncaisserCreateRequest {
	private double montant;
	private String referencePieceJustificative;
	private Date dateSignature;
	private Date dateEncaissement;
	private String financementSlug;
	private String partenaireSlug;
	/**
	 * @return the montant
	 */
	public double getMontant() {
		return montant;
	}
	/**
	 * @param montant the montant to set
	 */
	public void setMontant(double montant) {
		this.montant = montant;
	}

	
	public String getReferencePieceJustificative() {
		return referencePieceJustificative;
	}
	public void setReferencePieceJustificative(String referencePieceJustificative) {
		this.referencePieceJustificative = referencePieceJustificative;
	}
	/**
	 * @return the financementSlug
	 */
	public String getFinancementSlug() {
		return financementSlug;
	}
	/**
	 * @param financementSlug the financementSlug to set
	 */
	public void setFinancementSlug(String financementSlug) {
		this.financementSlug = financementSlug;
	}
	/**
	 * @return the partenaireSlug
	 */
	public String getPartenaireSlug() {
		return partenaireSlug;
	}
	/**
	 * @param partenaireSlug the partenaireSlug to set
	 */
	public void setPartenaireSlug(String partenaireSlug) {
		this.partenaireSlug = partenaireSlug;
	}
	/**
	 * @return the dateSignature
	 */
	public Date getDateSignature() {
		return dateSignature;
	}
	/**
	 * @param dateSignature the dateSignature to set
	 */
	public void setDateSignature(Date dateSignature) {
		this.dateSignature = dateSignature;
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
	
	
	
	
}
