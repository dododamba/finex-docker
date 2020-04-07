
/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.SecteurDAO;
import com.technomegapartners.finex.model.Secteur;
import com.technomegapartners.finex.repository.SecteurRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class SecteurService implements SecteurDAO {

private SecteurRepository repository;

	/**
	 *
	 */
	@Autowired
	public SecteurService(SecteurRepository repository) {
		this.repository = repository;
	}

	@Override
	public Secteur getOneByNom(String libelle) {
		return repository.findByNomAndDeletedAt(libelle, null);
	}

	@Override
	public Page<Secteur> all(Pageable page) {
		Page<Secteur> users = repository.findByDeletedAt(null,page);
		return users;
	}

	@Override
	public  Optional<Secteur>  show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(Secteur entity) {
		entity.setUpdatedAt(new Date());
      repository.saveAndFlush(entity);
	}

	@Override
	public void store(Secteur entity) {
       repository.save(entity);
	}

	@Override
	public void delete(Secteur entity) {
         entity.setDeletedAt(new Date());
         update(entity);
	}

	@Override
	public Collection<Secteur> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}
