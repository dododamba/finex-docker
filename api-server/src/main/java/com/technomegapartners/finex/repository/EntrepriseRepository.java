package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Entreprise;

/**
* @author DOMINIQUE DAMBA
*
*/
@Repository
public interface EntrepriseRepository extends JpaRepository<Entreprise, Long> {
   Entreprise findByNomAndDeletedAt(String libelle,Date deletedAt);
   Entreprise findByIdAndDeletedAt(Long id,Date deletedAt);
   Page<Entreprise> findByDeletedAt(Date deletedAt,Pageable page);
   Optional<Entreprise>  findBySlugAndDeletedAt(String slug,Date deletedAt);
   Collection<Entreprise> findByDeletedAt(Date deletedAt);
}


