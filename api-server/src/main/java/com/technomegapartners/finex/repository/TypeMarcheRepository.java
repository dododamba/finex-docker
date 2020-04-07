
/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.TypeMarche;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface TypeMarcheRepository extends JpaRepository<TypeMarche, Long> {
    TypeMarche findByNomAndDeletedAt(String libelle,Date deletedAt);
    TypeMarche findByIdAndDeletedAt(Long id,Date deletedAt);
    Page<TypeMarche> findByDeletedAt(Date deletedAt,Pageable page);
    Optional<TypeMarche>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<TypeMarche> findByDeletedAt(Date deletedAt);
}
