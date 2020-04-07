/**
 * 
 */
package com.technomegapartners.finex.repository;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Direction;

/**
 * @author DOMINIQUE DAMBA
 *
 */

@Repository
public interface DirectionRepository extends JpaRepository<Direction, Long> {
	Collection<Direction> findByLibelleAndDeletedAt(String libelle, Date deletedAt);

	Direction findByIdAndDeletedAt(Long id, Date deletedAt);

	Collection<Direction> findByDeletedAt(Date deletedAt);

	Optional<Direction> findBySlugAndDeletedAt(String slug, Date deletedAt);
	
}
