
/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.MaitreDouvrageDAO;
import com.technomegapartners.finex.model.MaitreDouvrage;
import com.technomegapartners.finex.repository.MaitreDouvrageRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class MaitreDouvrageService implements MaitreDouvrageDAO {

	private MaitreDouvrageRepository repository;

	/**
	 *
	 */
	@Autowired
	public MaitreDouvrageService(MaitreDouvrageRepository repository) {
		this.repository = repository;
	}

	@Override
	public MaitreDouvrage getOneByNom(String libelle) {
		return repository.findByNomAndDeletedAt(libelle, null);
	}

	@Override
	public Page<MaitreDouvrage> all(Pageable page) {
		Page<MaitreDouvrage> users = repository.findByDeletedAt(null, page);
		return users;
	}

	@Override
	public Optional<MaitreDouvrage> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(MaitreDouvrage entity) {
		entity.setUpdatedAt(new Date());
		repository.saveAndFlush(entity);
	}

	@Override
	public void store(MaitreDouvrage entity) {
		repository.save(entity);
	}

	@Override
	public void delete(MaitreDouvrage entity) {
		entity.setDeletedAt(new Date());
		update(entity);
	}

	@Override
	public Collection<MaitreDouvrage> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}