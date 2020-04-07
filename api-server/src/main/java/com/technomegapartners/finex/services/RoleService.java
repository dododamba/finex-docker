/**
 * 
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.RoleDAO;
import com.technomegapartners.finex.model.Role;
import com.technomegapartners.finex.repository.RoleRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class RoleService implements RoleDAO {

	private RoleRepository repository;

	/**
	 * @param repository
	 */
	@Autowired
	public RoleService(RoleRepository repository) {
		this.repository = repository;
	}

	@Override
	public Optional<Role> showByNom(String nom) {
		return this.repository.findByNameAndDeletedAt(nom, null);
	}

	@Override
	public Role getOne(String nom) {
		return this.repository.findByDeletedAtAndName(null, nom);
	}

	@Override
	public Collection<Role> all() {
		Collection<Role> roles = repository.findByDeletedAt(null);
		return roles;
	}

	@Override
	public Optional<Role> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(Role role) {
		role.setUpdatedAt(new Date());
		repository.saveAndFlush(role);
	}

	@Override
	public void store(Role role) {
		repository.save(role);
	}

	@Override
	public void delete(Role role) {
		role.setDeletedAt(new Date());
		update(role);
	}

}
