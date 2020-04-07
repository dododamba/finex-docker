/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Etape;
import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Projet;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface EtapeRepository extends JpaRepository<Etape, Long> {
    Etape findByNomAndDeletedAt(String libelle,Date deletedAt);
    Etape findByIdAndDeletedAt(Long id,Date deletedAt);
    Page<Etape> findByDeletedAt(Date deletedAt,Pageable page);
    Page<Etape> findByDeletedAtAndProjet(Date deletedAt,Projet projet,Pageable page);
    Optional<Etape>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<Etape> findByDeletedAt(Date deletedAt);
    Collection<Etape> findBygroupeTavail(GroupeTravail groupeTravail);
}