
/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.FichierDAO;
import com.technomegapartners.finex.model.Fichier;
import com.technomegapartners.finex.repository.FichierRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class FichierService implements FichierDAO {

	private FichierRepository repository;

	/**
	 *
	 */
	@Autowired
	public FichierService(FichierRepository repository) {
		this.repository = repository;
	}

	@Override
	public Fichier getOneByNom(String libelle) {
		return repository.findByNomAndDeletedAt(libelle, null);
	}

	@Override
	public Page<Fichier> all(Pageable page) {
		Page<Fichier> users = repository.findByDeletedAt(null, page);
		return users;
	}

	@Override
	public Optional<Fichier> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(Fichier entity) {
		entity.setUpdatedAt(new Date());
		repository.saveAndFlush(entity);
	}

	@Override
	public void store(Fichier entity) {
		repository.save(entity);
	}

	@Override
	public void delete(Fichier entity) {
		entity.setDeletedAt(new Date());
		update(entity);
	}

	@Override
	public Collection<Fichier> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}
