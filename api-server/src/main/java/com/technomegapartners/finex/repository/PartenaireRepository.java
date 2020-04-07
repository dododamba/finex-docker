/**
 * 
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Partenaire;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface PartenaireRepository extends JpaRepository<Partenaire, Long> {
	Partenaire findByNomAndDeletedAt(String nom, Date deletedAt);

	Partenaire findByIdAndDeletedAt(Long id, Date deletedAt);

	Page<Partenaire> findByDeletedAt(Date deletedAt, Pageable page);

	Optional<Partenaire> findBySlugAndDeletedAt(String slug, Date deletedAt);

	Collection<Partenaire> findByDeletedAt(Date deletedAt);

}
