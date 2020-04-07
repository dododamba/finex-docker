/**
 * 
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.PartenaireDAO;
import com.technomegapartners.finex.model.Partenaire;
import com.technomegapartners.finex.repository.PartenaireRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class PartenaireService implements PartenaireDAO {
	private PartenaireRepository repository;

	/** 
	 *  
	 */
	@Autowired
	public PartenaireService(PartenaireRepository repository) {
		this.repository = repository;
	}

	@Override
	public Partenaire getOneByNom(String nom) {
		return repository.findByNomAndDeletedAt(nom, null);
	}

	@Override
	public Page<Partenaire> all(Pageable page) {
		Page<Partenaire> users = repository.findByDeletedAt(null, page);
		return users;
	}

	@Override
	public Optional<Partenaire> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(Partenaire partenaire) {
		partenaire.setUpdatedAt(new Date());
		repository.saveAndFlush(partenaire);
	}

	@Override
	public void store(Partenaire partenaire) {
		repository.save(partenaire);
	}

	@Override
	public void delete(Partenaire partenaire) {
		partenaire.setDeletedAt(new Date());
		update(partenaire);
	}

	@Override
	public Collection<Partenaire> allWithoutPagination() {
		Collection<Partenaire> partenaires = repository.findByDeletedAt(null);

		return partenaires;
	}

}
