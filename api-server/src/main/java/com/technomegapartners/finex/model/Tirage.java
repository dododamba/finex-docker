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
@Table(name = "tb_tmp_finex_tirages")
public class Tirage
        extends OperationFiananciere
        implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    private Date dateDecaissement;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private MaitreDouvrage maitreDouvrage;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Projet projet;

    public Tirage() {
        // TODO Auto-generated constructor stub
    }

    /**
     * @param dateDecaissement
     * @param maitreDouvrage
     */
    public Tirage(Date dateDecaissement, MaitreDouvrage maitreDouvrage) {
        super();
        this.dateDecaissement = dateDecaissement;
        this.maitreDouvrage = maitreDouvrage;
    }

    /**
     * @return the dateDecaissement
     */
    public Date getDateDecaissement() {
        return dateDecaissement;
    }

    /**
     * @param dateDecaissement the dateDecaissement to set
     */
    public void setDateDecaissement(Date dateDecaissement) {
        this.dateDecaissement = dateDecaissement;
    }

    /**
     * @return the maitreDouvrage
     */
    public MaitreDouvrage getMaitreDouvrage() {
        return maitreDouvrage;
    }

    /**
     * @param maitreDouvrage the maitreDouvrage to set
     */
    public void setMaitreDouvrage(MaitreDouvrage maitreDouvrage) {
        this.maitreDouvrage = maitreDouvrage;
    }

}
