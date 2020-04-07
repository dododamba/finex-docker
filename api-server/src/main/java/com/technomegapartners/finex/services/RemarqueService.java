/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.RemarqueDAO;
import com.technomegapartners.finex.model.Remarque;
import com.technomegapartners.finex.repository.RemarqueRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class RemarqueService implements RemarqueDAO {

private RemarqueRepository repository;

	/**
	 *
	 */
	@Autowired
	public RemarqueService(RemarqueRepository repository) {
		this.repository = repository;
	}



	@Override
	public Page<Remarque> all(Pageable page) {
		Page<Remarque> users = repository.findByDeletedAt(null,page);
		return users;
	}

	@Override
	public  Optional<Remarque>  show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(Remarque entity) {
		entity.setUpdatedAt(new Date());
      repository.saveAndFlush(entity);
	}

	@Override
	public void store(Remarque entity) {
       repository.save(entity);
	}

	@Override
	public void delete(Remarque entity) {
         entity.setDeletedAt(new Date());
         update(entity);
	}

	@Override
	public Collection<Remarque> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}
