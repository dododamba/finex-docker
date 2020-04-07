
/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.InstitutionDAO;
import com.technomegapartners.finex.model.Institution;
import com.technomegapartners.finex.repository.InstitutionRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class InstitutionService implements InstitutionDAO {

private InstitutionRepository repository;

	/**
	 *
	 */
	@Autowired
	public InstitutionService(InstitutionRepository repository) {
		this.repository = repository;
	}

	@Override
	public Institution getOneByNom(String libelle) {
		return repository.findByNomAndDeletedAt(libelle, null);
	}

	@Override
	public Page<Institution> all(Pageable page) {
		Page<Institution> users = repository.findByDeletedAt(null,page);
		return users;
	}

	@Override
	public  Optional<Institution>  show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(Institution entity) {
		entity.setUpdatedAt(new Date());
      repository.saveAndFlush(entity);
	}

	@Override
	public void store(Institution entity) {
       repository.save(entity);
	}

	@Override
	public void delete(Institution entity) {
         entity.setDeletedAt(new Date());
         update(entity);
	}

	@Override
	public Collection<Institution> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}
