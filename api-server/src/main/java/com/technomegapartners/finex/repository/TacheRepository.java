/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.Tache;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface TacheRepository extends JpaRepository<Tache, Long> {
    Tache findByNomAndDeletedAt(String libelle,Date deletedAt);
    Tache findByIdAndDeletedAt(Long id,Date deletedAt);
    Page<Tache> findByDeletedAt(Date deletedAt,Pageable page);
    Optional<Tache>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<Tache> findByDeletedAt(Date deletedAt);
    Collection<Tache> findByExceuteurAndDeletedAt(Set<Employe> employes,Date deletedAt);
}