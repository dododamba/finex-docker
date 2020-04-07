/**
 * 
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.MaitreDouvrage;
import com.technomegapartners.finex.model.Projet;

/**
 * @author dominique
 *
 */

@Repository
public interface ProjetRepository extends JpaRepository<Projet, Long>{
	Projet findByNomAndDeletedAt(String nom,Date deletedAt);
	Projet findByIdAndDeletedAt(Long id,Date deletedAt);
	Page<Projet> findByDeletedAt(Date deletedAt,Pageable page);
	Optional<Projet>  findBySlugAndDeletedAt(String slug,Date deletedAt);
	Collection<Projet> findByDeletedAt(Date delete);
	Page<Projet> findByMaitreDouvrage(MaitreDouvrage maitreDouvrage,Pageable pageable);
	Collection<Projet> findByMaitreDouvrage(MaitreDouvrage maitreDouvrage);


}
