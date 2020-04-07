/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.MaitreDoeuvreDAO;
import com.technomegapartners.finex.model.MaitreDoeuvre;
import com.technomegapartners.finex.repository.MaitreDoeuvreRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class MaitreDoeuvreService implements MaitreDoeuvreDAO {

	private MaitreDoeuvreRepository repository;

	/**
	 *
	 */
	@Autowired
	public MaitreDoeuvreService(MaitreDoeuvreRepository repository) {
		this.repository = repository;
	}

	@Override
	public MaitreDoeuvre getOneByNom(String libelle) {
		return repository.findByNomAndDeletedAt(libelle, null);
	}

	@Override
	public Page<MaitreDoeuvre> all(Pageable page) {
		Page<MaitreDoeuvre> users = repository.findByDeletedAt(null, page);
		return users;
	}

	@Override
	public Optional<MaitreDoeuvre> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(MaitreDoeuvre entity) {
		entity.setUpdatedAt(new Date());
		repository.saveAndFlush(entity);
	}

	@Override
	public void store(MaitreDoeuvre entity) {
		repository.save(entity);
	}

	@Override
	public void delete(MaitreDoeuvre entity) {
		entity.setDeletedAt(new Date());
		update(entity);
	}

	@Override
	public Collection<MaitreDoeuvre> allWithOutPagination() {
		return repository.findByDeletedAt(null);
	}

}
