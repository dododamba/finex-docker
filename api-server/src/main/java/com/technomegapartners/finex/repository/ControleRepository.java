package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Controle;

@Repository
public interface ControleRepository extends JpaRepository<Controle, Long> {
	   Controle findByLibelleAndDeletedAt(String libelle,Date deletedAt);
	   Controle findByIdAndDeletedAt(Long id,Date deletedAt);
	   Page<Controle> findByDeletedAt(Date deletedAt,Pageable page);
	   Optional<Controle>  findBySlugAndDeletedAt(String slug,Date deletedAt);
	   Collection<Controle> findByDeletedAt(Date deletedAt);
}
