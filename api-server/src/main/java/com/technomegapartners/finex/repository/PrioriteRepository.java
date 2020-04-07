package com.technomegapartners.finex.repository;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Priorite;

@Repository
public interface PrioriteRepository extends JpaRepository< Priorite, Long> {
	
	Collection<Priorite> findByLibelle(String libelle);
	Optional<Priorite> findByLibelleAndDeletedAt(String libelle, Date deletedAt);

}
