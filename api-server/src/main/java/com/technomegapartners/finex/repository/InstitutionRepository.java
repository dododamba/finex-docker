/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Institution;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface InstitutionRepository extends JpaRepository<Institution, Long> {
	  Institution findByNomAndDeletedAt(String libelle,Date deletedAt);
	  Institution findByIdAndDeletedAt(Long id,Date deletedAt);
	  Page<Institution> findByDeletedAt(Date deletedAt,Pageable page);
	  Optional<Institution>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<Institution> findByDeletedAt(Date deletedAt);
}
