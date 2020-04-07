/**
 * 
 */
package com.technomegapartners.finex.model;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author DOMINIQUE DAMBA
 *
 */

@Entity
@Table(name = "tb_tmp_finex_employes")
public class Employe implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nom;

	private String prenom;

	private String matricule;

	private Date dateNaissance;

	private Date dateEmbauche;

	private Double salaire;

	@OneToOne(mappedBy = "responsable")
	@JsonIgnore
	private Direction directionDirige;
	@OneToMany(mappedBy = "administrateur")
	@JsonIgnore
	private Collection<GroupeTravail> groupeDiriges;

	
	@ManyToOne
	@JsonIgnore
	private Tache tache;

	@OneToMany(mappedBy = "planificateur")
	@JsonIgnore
	private Set<Tache> tachesPlanifies = new HashSet<>();

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Direction direction;

	@OneToOne
	private User user;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "employe")
	private Collection<InformationEmploye> informations;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "responsable")
	@JsonIgnore
	private Collection<Projet> projetDiriges;
	@NotBlank
	private String slug;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	@OneToMany(mappedBy = "employe")
    @JsonIgnore
	private Set<Remarque> remarques = new HashSet<Remarque>();
	@OneToMany(mappedBy = "employeResponsable")
    @JsonIgnore
	private Set<Institution>  institutions = new HashSet<Institution>();
	public Employe() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param nom
	 * @param prenom
	 * @param matricule
	 * @param dateNaissance
	 * @param dateEmbauche
	 * @param salaire
	 * @param direction
	 * @param slug
	 */
	public Employe(@NotBlank String nom, @NotBlank String prenom, @NotBlank String matricule, Date dateNaissance,
			Date dateEmbauche, Double salaire, Direction direction, @NotBlank String slug) {
		this.nom = nom;
		this.prenom = prenom;
		this.matricule = matricule;
		this.dateNaissance = dateNaissance;
		this.dateEmbauche = dateEmbauche;
		this.salaire = salaire;
		this.direction = direction;
		this.slug = slug;
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

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public Date getDateEmbauche() {
		return dateEmbauche;
	}

	public void setDateEmbauche(Date dateEmbauche) {
		this.dateEmbauche = dateEmbauche;
	}

	public Double getSalaire() {
		return salaire;
	}

	public void setSalaire(Double salaire) {
		this.salaire = salaire;
	}

	public Direction getDirectionDirige() {
		return directionDirige;
	}

	public void setDirectionDirige(Direction directionDirige) {
		this.directionDirige = directionDirige;
	}

	public Direction getDirection() {
		return direction;
	}

	public void setDirection(Direction direction) {
		this.direction = direction;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getSlug() {
		return slug;
	}

	public void setSlug(String slug) {
		this.slug = slug;
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

	public Collection<InformationEmploye> getInformations() {
		return informations;
	}

	public void setInformations(Collection<InformationEmploye> informations) {
		this.informations = informations;
	}

	/**
	 * @return the projetDiriges
	 */
	public Collection<Projet> getProjetDiriges() {
		return projetDiriges;
	}

	/**
	 * @param projetDiriges the projetDiriges to set
	 */
	public void setProjetDiriges(Collection<Projet> projetDiriges) {
		this.projetDiriges = projetDiriges;
	}

	public Collection<GroupeTravail> getGroupeDiriges() {
		return groupeDiriges;
	}

	public void setGroupeDiriges(Collection<GroupeTravail> groupeDiriges) {
		this.groupeDiriges = groupeDiriges;
	}



	public Tache getTache() {
		return tache;
	}

	public void setTache(Tache tache) {
		this.tache = tache;
	}

	public Set<Tache> getTachesPlanifies() {
		return tachesPlanifies;
	}

	public void setTachesPlanifies(Set<Tache> tachesPlanifies) {
		this.tachesPlanifies = tachesPlanifies;
	}

	/**
	 * @return the remarques
	 */
	public Set<Remarque> getRemarques() {
		return remarques;
	}

	/**
	 * @param remarques the remarques to set
	 */
	public void setRemarques(Set<Remarque> remarques) {
		this.remarques = remarques;
	}

	
}
