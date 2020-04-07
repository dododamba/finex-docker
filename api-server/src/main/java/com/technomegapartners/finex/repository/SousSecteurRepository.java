/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.SousSecteur;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface SousSecteurRepository extends JpaRepository<SousSecteur, Long> {
	  SousSecteur findByNomAndDeletedAt(String libelle,Date deletedAt);
	  SousSecteur findByIdAndDeletedAt(Long id,Date deletedAt);
	  Page<SousSecteur> findByDeletedAt(Date deletedAt,Pageable page);
	  Optional<SousSecteur>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<SousSecteur> findByDeletedAt(Date deletedAt);
}