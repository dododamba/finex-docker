/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Fichier;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface FichierRepository extends JpaRepository<Fichier, Long> {
	Fichier findByNomAndDeletedAt(String libelle, Date deletedAt);

	Fichier findByIdAndDeletedAt(Long id, Date deletedAt);

	Page<Fichier> findByDeletedAt(Date deletedAt, Pageable page);

	Optional<Fichier> findBySlugAndDeletedAt(String slug, Date deletedAt);

	Collection<Fichier> findByDeletedAt(Date deletedAt);
}