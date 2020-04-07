/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.TypeFinancementDAO;
import com.technomegapartners.finex.model.TypeFinancement;
import com.technomegapartners.finex.repository.TypeFinancementRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class TypeFinancementService implements TypeFinancementDAO {

	private TypeFinancementRepository repository;

	/**
	 *
	 */
	@Autowired
	public TypeFinancementService(TypeFinancementRepository repository) {
		this.repository = repository;
	}

	@Override
	public TypeFinancement getOneByLibelle(String libelle) {
		return repository.findByLibelleAndDeletedAt(libelle, null);
	}

	@Override
	public Page<TypeFinancement> all(Pageable page) {
		Page<TypeFinancement> users = repository.findByDeletedAt(null, page);
		return users;
	}

	@Override
	public Optional<TypeFinancement> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(TypeFinancement entity) {
		entity.setUpdatedAt(new Date());
		repository.saveAndFlush(entity);
	}

	@Override
	public void store(TypeFinancement entity) {
		repository.save(entity);
	}

	@Override
	public void delete(TypeFinancement entity) {
		entity.setDeletedAt(new Date());
		update(entity);
	}

	@Override
	public Collection<TypeFinancement> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}