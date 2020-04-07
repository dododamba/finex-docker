package com.technomegapartners.finex.repository;


import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.MaitreDoeuvreDelegue;

/**
* @author DOMINIQUE DAMBA
*
*/
@Repository
public interface MaitreDoeuvreDelegueRepository extends JpaRepository<MaitreDoeuvreDelegue, Long> {
   MaitreDoeuvreDelegue findByNomAndDeletedAt(String libelle,Date deletedAt);
   MaitreDoeuvreDelegue findByIdAndDeletedAt(Long id,Date deletedAt);
   Page<MaitreDoeuvreDelegue> findByDeletedAt(Date deletedAt,Pageable page);
   Optional<MaitreDoeuvreDelegue>  findBySlugAndDeletedAt(String slug,Date deletedAt);
   Collection<MaitreDoeuvreDelegue> findByDeletedAt(Date deletedAt);
}