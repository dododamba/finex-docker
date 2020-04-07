/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.TypeFinancement;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface TypeFinancementRepository extends JpaRepository<TypeFinancement, Long> {
	TypeFinancement findByLibelleAndDeletedAt(String libelle, Date deletedAt);

	TypeFinancement findByIdAndDeletedAt(Long id, Date deletedAt);

	Page<TypeFinancement> findByDeletedAt(Date deletedAt, Pageable page);

	Optional<TypeFinancement> findBySlugAndDeletedAt(String slug, Date deletedAt);

	Collection<TypeFinancement> findByDeletedAt(Date deletedAt);
}