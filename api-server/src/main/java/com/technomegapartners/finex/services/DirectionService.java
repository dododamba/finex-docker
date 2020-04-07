/**
 * 
 */
package com.technomegapartners.finex.services;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.DirectionDAO;
import com.technomegapartners.finex.model.Direction;
import com.technomegapartners.finex.repository.DirectionRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */

@Service
public class DirectionService implements DirectionDAO {
	private DirectionRepository repository;

	/** 
	 *  
	 */
	@Autowired
	public DirectionService(DirectionRepository repository) {
		this.repository = repository;
	}



	@Override
	public Collection<Direction> all() {
		Collection<Direction> directions = repository.findByDeletedAt(null);
		return directions;
	}

	@Override
	public Optional<Direction> show(String slug) {
		return repository.findBySlugAndDeletedAt(slug, null);
	}

	@Override
	public void update(Direction direction) {
		direction.setUpdatedAt(new Date());
		repository.saveAndFlush(direction);
	}

	@Override
	public void store(Direction direction) {
		repository.save(direction);
	}

	@Override
	public void delete(Direction direction) {
		direction.setDeletedAt(new Date());
		update(direction);
	}

	@Override
	public Collection<Direction> getByLibelle(String libelle) {
		// TODO Auto-generated method stub
		return repository.findByLibelleAndDeletedAt(libelle, null);
	}

}
