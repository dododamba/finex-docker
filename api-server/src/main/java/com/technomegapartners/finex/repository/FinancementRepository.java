package com.technomegapartners.finex.repository;

import com.technomegapartners.finex.model.Financement;
import com.technomegapartners.finex.model.Projet;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

@Repository
public interface FinancementRepository extends JpaRepository<Financement, Long> {

    Collection<Financement> findByLibelleAndDeletedAt(String libelle, Date deletedAt);
    Financement findByIdAndDeletedAt(Long id,Date deletedAt);
    Page<Financement> findByDeletedAt(Date deletedAt, Pageable page);
    Optional<Financement> findBySlugAndDeletedAt(String slug, Date deletedAt);
    Collection<Financement> findByDeletedAt(Date deletedAt);
    Collection<Financement> findByProjet(Projet projet);
}
