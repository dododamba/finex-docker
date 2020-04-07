/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Secteur;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface SecteurRepository extends JpaRepository<Secteur, Long> {
	  Secteur findByNomAndDeletedAt(String libelle,Date deletedAt);
	  Secteur findByIdAndDeletedAt(Long id,Date deletedAt);
	  Page<Secteur> findByDeletedAt(Date deletedAt,Pageable page);
	  Optional<Secteur>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<Secteur> findByDeletedAt(Date deletedAt);
}

