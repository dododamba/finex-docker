/**
 * 
 */
package com.technomegapartners.finex.dao;

import java.util.Collection;
import java.util.Optional;

import com.technomegapartners.finex.model.Direction;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface DirectionDAO {

	Collection<Direction> all();

	Optional<Direction> show(String slug);

	void update(Direction direction);

	void store(Direction direction);

	void delete(Direction direction);
	
	Collection<Direction> getByLibelle(String libelle);
	
	
}
