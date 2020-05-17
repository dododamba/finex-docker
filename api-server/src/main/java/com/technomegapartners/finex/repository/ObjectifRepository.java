package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Objectif;
import com.technomegapartners.finex.model.Projet;

@Repository
public interface ObjectifRepository  extends JpaRepository<Objectif, Long>{
    Objectif findByLibelleAndDeletedAt(String libelle,Date deletedAt);
    Objectif findByIdAndDeletedAt(Long id,Date deletedAt);
    Page<Objectif> findByDeletedAt(Date deletedAt,Pageable page);
    Optional<Objectif>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<Objectif> findByDeletedAt(Date deletedAt);
    Collection<Objectif> findByProjet(Projet projet);
}
