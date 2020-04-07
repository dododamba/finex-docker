package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.CatarteristiqueTechnique;
import com.technomegapartners.finex.model.Projet;

@Repository
public interface CatarteristiqueTechniqueRepository  extends JpaRepository<CatarteristiqueTechnique, Long>{
    CatarteristiqueTechnique findByLibelleAndDeletedAt(String libelle,Date deletedAt);
    CatarteristiqueTechnique findByIdAndDeletedAt(Long id,Date deletedAt);
    Page<CatarteristiqueTechnique> findByDeletedAt(Date deletedAt,Pageable page);
    Optional<CatarteristiqueTechnique>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<CatarteristiqueTechnique> findByDeletedAt(Date deletedAt);
    Collection<CatarteristiqueTechnique> findByProjet(Projet projet);
}
