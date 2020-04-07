package com.technomegapartners.finex.model;

import org.hibernate.annotations.NaturalId;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

/**
 */

@Entity
@Table(name = "tb_tmp_finex_roles", uniqueConstraints = { @UniqueConstraint(columnNames = { "name" }) })
public class Role implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NaturalId
	@Column(length = 60)
	private String name;
	@NotBlank
	private String slug;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "tb_tmp_finex_role_privileges", joinColumns = @JoinColumn(name = "role_id"), inverseJoinColumns = @JoinColumn(name = "resource_id"))
	private Set<Resource> resources;

	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;

	public Role() {

	}

	/**
	 * @param name
	 * @param slug
	 */
	public Role(String name, @NotBlank String slug) {
		this.name = name;
		this.slug = slug;
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the slug
	 */
	public String getSlug() {
		return slug;
	}

	/**
	 * @param slug the slug to set
	 */
	public void setSlug(String slug) {
		this.slug = slug;
	}

	/**
	 * @return the createdAt
	 */
	public Date getCreatedAt() {
		return createdAt;
	}

	/**
	 * @param createdAt the createdAt to set
	 */
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	/**
	 * @return the updatedAt
	 */
	public Date getUpdatedAt() {
		return updatedAt;
	}

	/**
	 * @param updatedAt the updatedAt to set
	 */
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	/**
	 * @return the deletedAt
	 */
	public Date getDeletedAt() {
		return deletedAt;
	}

	/**
	 * @param deletedAt the deletedAt to set
	 */
	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	public Set<Resource> getResources() {
		return resources;
	}

	public void setResources(Set<Resource> resources) {
		this.resources = resources;
	}

}
