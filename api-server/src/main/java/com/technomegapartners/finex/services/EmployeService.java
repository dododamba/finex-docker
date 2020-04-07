/**
 * 
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.EmployeDao;
import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.User;
import com.technomegapartners.finex.repository.EmployeRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class EmployeService implements EmployeDao {
	private EmployeRepository repository;

	/** 
	 *  
	 */
	@Autowired
	public EmployeService(EmployeRepository repository) {
		this.repository = repository;
	}

	@Override
	public Employe getOneByNom(String nom, String prenom) {
		return repository.findByNomAndPrenomAndDeletedAt(nom, prenom, null);
	}

	@Override
	public Collection<Employe> all() {
		Collection<Employe> employes = repository.findByDeletedAt(null);
		return employes;
	}

	@Override
	public Optional<Employe> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(Employe employe) {
		employe.setUpdatedAt(new Date());
		repository.saveAndFlush(employe);
	}

	@Override
	public void store(Employe employe) {
		repository.save(employe);
	}

	@Override
	public void delete(Employe employe) {
		employe.setDeletedAt(new Date());
		update(employe);
	}

	@Override
	public Employe showBySlug(String slug) {
		Employe employe = repository.findBySlug(slug);
		return employe;
	}

	@SuppressWarnings("null")
	@Override
	public Collection<Employe> doNotHaveUserAccount() {
		Collection<Employe> employes = all();
		Collection<Employe> doNotHaveAccounts = new ArrayList<Employe>();

		for (Employe e : employes) {
			if (e.getUser() == null) {
				doNotHaveAccounts.add(e);
			}
		}
		return doNotHaveAccounts;
	}

	@Override
	public Optional<Employe> doNotHaveAccount(User user) {
		return repository.findByUser(user);
	}

	@Override
	public Optional<Employe> getEmployeByUserAccount(User user) {
		return repository.findByUser(user);
	}

}
