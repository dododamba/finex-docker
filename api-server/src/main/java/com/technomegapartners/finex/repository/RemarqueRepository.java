/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Remarque;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface RemarqueRepository extends JpaRepository<Remarque, Long> {
	  Remarque findByIdAndDeletedAt(Long id,Date deletedAt);
	  Page<Remarque> findByDeletedAt(Date deletedAt,Pageable page);
	  Optional<Remarque>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<Remarque> findByDeletedAt(Date deletedAt);
}
