
/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.SousSecteurDAO;
import com.technomegapartners.finex.model.SousSecteur;
import com.technomegapartners.finex.repository.SousSecteurRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class SousSecteurService implements SousSecteurDAO {

private SousSecteurRepository repository;

	/**
	 *
	 */
	@Autowired
	public SousSecteurService(SousSecteurRepository repository) {
		this.repository = repository;
	}

	@Override
	public SousSecteur getOneByNom(String libelle) {
		return repository.findByNomAndDeletedAt(libelle, null);
	}

	@Override
	public Page<SousSecteur> all(Pageable page) {
		Page<SousSecteur> users = repository.findByDeletedAt(null,page);
		return users;
	}

	@Override
	public  Optional<SousSecteur>  show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(SousSecteur entity) {
		entity.setUpdatedAt(new Date());
      repository.saveAndFlush(entity);
	}

	@Override
	public void store(SousSecteur entity) {
       repository.save(entity);
	}

	@Override
	public void delete(SousSecteur entity) {
         entity.setDeletedAt(new Date());
         update(entity);
	}

	@Override
	public Collection<SousSecteur> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}