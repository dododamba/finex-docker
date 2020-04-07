/**
 * 
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.TypePartenaireDAO;
import com.technomegapartners.finex.model.TypePartenaire;
import com.technomegapartners.finex.repository.TypePartenaireRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class TypePartenaireService implements TypePartenaireDAO {

	private TypePartenaireRepository repository;

	/** 
	 *  
	 */
	@Autowired
	public TypePartenaireService(TypePartenaireRepository repository) {
		this.repository = repository;
	}

	@Override
	public TypePartenaire getOneByLibelle(String libelle) {
		return repository.findByLibelleAndDeletedAt(libelle, null);
	}

	@Override
	public Page<TypePartenaire> all(Pageable page) {
		Page<TypePartenaire> users = repository.findByDeletedAt(null, page);
		return users;
	}

	@Override
	public Optional<TypePartenaire> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(TypePartenaire typePartenaire) {
		typePartenaire.setUpdatedAt(new Date());
		repository.saveAndFlush(typePartenaire);
	}

	@Override
	public void store(TypePartenaire typePartenaire) {
		repository.save(typePartenaire);
	}

	@Override
	public void delete(TypePartenaire typePartenaire) {
		typePartenaire.setDeletedAt(new Date());
		update(typePartenaire);
	}

	@Override
	public Collection<TypePartenaire> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}
