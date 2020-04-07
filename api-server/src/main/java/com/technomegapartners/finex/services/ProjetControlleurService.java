
/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.ProjetControlleurDAO;
import com.technomegapartners.finex.model.ProjetControlleur;
import com.technomegapartners.finex.repository.ProjetControlleurRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class ProjetControlleurService implements ProjetControlleurDAO {

private ProjetControlleurRepository repository;

	/**
	 *
	 */
	@Autowired
	public ProjetControlleurService(ProjetControlleurRepository repository) {
		this.repository = repository;
	}

	@Override
	public ProjetControlleur getOneByNom(String libelle) {
		return repository.findByNomAndDeletedAt(libelle, null);
	}

	@Override
	public Page<ProjetControlleur> all(Pageable page) {
		Page<ProjetControlleur> users = repository.findByDeletedAt(null,page);
		return users;
	}

	@Override
	public  Optional<ProjetControlleur>  show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(ProjetControlleur entity) {
		entity.setUpdatedAt(new Date());
      repository.saveAndFlush(entity);
	}

	@Override
	public void store(ProjetControlleur entity) {
       repository.save(entity);
	}

	@Override
	public void delete(ProjetControlleur entity) {
         entity.setDeletedAt(new Date());
         update(entity);
	}

	@Override
	public Collection<ProjetControlleur> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}
