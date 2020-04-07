/**
 *
 */
package com.technomegapartners.finex.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * @author dominique
 *
 */
@Entity
@Table(name = "tb_tmp_finex_etapes")
public class Etape implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;

    private String description;
    private double cout;
    private Date dateDebut;
    private Date dateFin;
    private String slug;
    @Column(length = 1000)
    private String livrable;
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "etape")
    private Set<Tache> taches = new HashSet<>();
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "etape")
    private Set<ProjetControlleur> constrolleurs = new HashSet<>();
    
    @ManyToOne
    @JsonIgnore
    private Projet projet;
    
    @ManyToOne
    @JsonIgnore
    private GroupeTravail groupeTavail;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;
    @Temporal(TemporalType.DATE)
    private Date deletedAt;

    public Etape() {
    }

    public Etape(String libelle, String description, String slug, GroupeTravail groupeTavail, Date createdAt, Date updatedAt, Date deletedAt) {
        this.nom = libelle;
        this.description = description;
        this.slug = slug;
        this.groupeTavail = groupeTavail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public Set<Tache> getTaches() {
        return taches;
    }

    public void setTaches(Set<Tache> taches) {
        this.taches = taches;
    }

    public GroupeTravail getGroupeTavail() {
        return groupeTavail;
    }

    public void setGroupeTavail(GroupeTravail groupeTavail) {
        this.groupeTavail = groupeTavail;
    }

    public Date getCreatedAt() {
        return createdAt; 
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Date getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(Date deletedAt) {
        this.deletedAt = deletedAt;
    }

	/**
	 * @return the cout
	 */
	public double getCout() {
		return cout;
	}

	/**
	 * @param cout the cout to set
	 */
	public void setCout(double cout) {
		this.cout = cout;
	}

	/**
	 * @return the dateDebut
	 */
	public Date getDateDebut() {
		return dateDebut;
	}

	/**
	 * @param dateDebut the dateDebut to set
	 */
	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	/**
	 * @return the dateFin
	 */
	public Date getDateFin() {
		return dateFin;
	}

	/**
	 * @param dateFin the dateFin to set
	 */
	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}

	/**
	 * @return the constrolleurs
	 */
	public Set<ProjetControlleur> getConstrolleurs() {
		return constrolleurs;
	}

	/**
	 * @param constrolleurs the constrolleurs to set
	 */
	public void setConstrolleurs(Set<ProjetControlleur> constrolleurs) {
		this.constrolleurs = constrolleurs;
	}

	public Projet getProjet() {
		return projet;
	}

	public void setProjet(Projet projet) {
		this.projet = projet;
	}
    
	
    
}
