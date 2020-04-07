/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.MaitreDoeuvre;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface MaitreDoeuvreRepository extends JpaRepository<MaitreDoeuvre, Long> {
	MaitreDoeuvre findByNomAndDeletedAt(String libelle, Date deletedAt);

	MaitreDoeuvre findByIdAndDeletedAt(Long id, Date deletedAt);

	Page<MaitreDoeuvre> findByDeletedAt(Date deletedAt, Pageable page);

	Optional<MaitreDoeuvre> findBySlugAndDeletedAt(String slug, Date deletedAt);

	Collection<MaitreDoeuvre> findByDeletedAt(Date deletedAt);
}