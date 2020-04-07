

/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.GroupeTravailDAO;
import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.repository.EmployeRepository;
import com.technomegapartners.finex.repository.GroupeTravailRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class GroupeTravailService implements GroupeTravailDAO {

private GroupeTravailRepository repository;
private EmployeRepository employeRepository;

	/**
	 *
	 */
	@Autowired
	public GroupeTravailService(GroupeTravailRepository repository,EmployeRepository employeRepository) {
		this.repository = repository;
		this.employeRepository = employeRepository;
	}

	@Override
	public GroupeTravail getOneByNom(String libelle) {
		return repository.findByNomAndDeletedAt(libelle, null);
	}

	@Override
	public Page<GroupeTravail> all(Pageable page) {
		Page<GroupeTravail> gp = repository.findByDeletedAt(null,page);
		return gp;
	}

	@Override
	public  Optional<GroupeTravail>  show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(GroupeTravail entity) {
		entity.setUpdatedAt(new Date());
      repository.saveAndFlush(entity);
	}

	@Override
	public void store(GroupeTravail entity) {
       repository.save(entity);
	}

	@Override
	public void delete(GroupeTravail entity) {
         entity.setDeletedAt(new Date());
         update(entity);
	}

	@Override
	public Collection<GroupeTravail> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

	@Override
	public Collection<GroupeTravail> allByProjet(Projet projet) {
		
		return repository.findByProjet(projet);
	}

	@Override
	public Collection<GroupeTravail> getGroupsForLoggedEmploye(String slug) {
		Employe employe = employeRepository.findBySlugAndDeletedAt(slug, null).get();
		Set<Employe> employeList = new HashSet<>();
		employeList.add(employe);
		
		return repository.findByMembresAndDeletedAt(employeList, null);
	}

}

