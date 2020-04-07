
/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.TacheDAO;
import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.Tache;
import com.technomegapartners.finex.repository.EmployeRepository;
import com.technomegapartners.finex.repository.TacheRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class TacheService implements TacheDAO {

	private TacheRepository repository;
	private EmployeRepository employeRepository;

	/**
	 *
	 */
	@Autowired
	public TacheService(TacheRepository repository, EmployeRepository employeRepository) {
		this.repository = repository;
		this.employeRepository = employeRepository;
	}

	@Override
	public Tache getOneByNom(String libelle) {
		return repository.findByNomAndDeletedAt(libelle, null);
	}

	@Override
	public Page<Tache> all(Pageable page) {
		Page<Tache> users = repository.findByDeletedAt(null, page);
		return users;
	}

	@Override
	public Optional<Tache> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(Tache entity) {
		entity.setUpdatedAt(new Date());
		repository.saveAndFlush(entity);
	}

	@Override
	public void store(Tache entity) {
		repository.save(entity);
	}

	@Override
	public void delete(Tache entity) {
		entity.setDeletedAt(new Date());
		update(entity);
	}

	@Override
	public Collection<Tache> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

	@Override
	public Collection<Tache> getTaskForConnectedUser(String userSlug) {
		Employe employe = employeRepository.findBySlugAndDeletedAt(userSlug, null).get();
		Set<Employe> employeList = new HashSet<>();
		employeList.add(employe);

		return repository.findByExceuteurAndDeletedAt(employeList, null);
	}

}
