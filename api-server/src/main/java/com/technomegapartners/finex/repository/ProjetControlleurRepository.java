/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.ProjetControlleur;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface ProjetControlleurRepository extends JpaRepository<ProjetControlleur, Long> {
	ProjetControlleur findByNomAndDeletedAt(String libelle, Date deletedAt);

	ProjetControlleur findByIdAndDeletedAt(Long id, Date deletedAt);

	Page<ProjetControlleur> findByDeletedAt(Date deletedAt, Pageable page);

	Optional<ProjetControlleur> findBySlugAndDeletedAt(String slug, Date deletedAt);

	Collection<ProjetControlleur> findByDeletedAt(Date deletedAt);
}