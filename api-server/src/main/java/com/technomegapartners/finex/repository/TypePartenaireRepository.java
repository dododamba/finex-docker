/**
 * 
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.TypePartenaire;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface TypePartenaireRepository extends JpaRepository<TypePartenaire, Long> {
	TypePartenaire findByLibelleAndDeletedAt(String libelle, Date deletedAt);

	TypePartenaire findByIdAndDeletedAt(Long id, Date deletedAt);

	Page<TypePartenaire> findByDeletedAt(Date deletedAt, Pageable page);

	Optional<TypePartenaire> findBySlugAndDeletedAt(String slug, Date deletedAt);

	Collection<TypePartenaire> findByDeletedAt(Date deletedAt);
}
