/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.MaitreDouvrage;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface MaitreDouvrageRepository extends JpaRepository<MaitreDouvrage, Long> {
	MaitreDouvrage findByNomAndDeletedAt(String libelle, Date deletedAt);

	MaitreDouvrage findByIdAndDeletedAt(Long id, Date deletedAt);

	Page<MaitreDouvrage> findByDeletedAt(Date deletedAt, Pageable page);

	Optional<MaitreDouvrage> findBySlugAndDeletedAt(String slug, Date deletedAt);

	Collection<MaitreDouvrage> findByDeletedAt(Date deletedAt);
}