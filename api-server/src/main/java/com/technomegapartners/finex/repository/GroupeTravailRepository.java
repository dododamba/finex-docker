/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Projet;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface GroupeTravailRepository extends JpaRepository<GroupeTravail, Long> {
	  GroupeTravail findByNomAndDeletedAt(String libelle,Date deletedAt);
	  GroupeTravail findByIdAndDeletedAt(Long id,Date deletedAt);
	  Page<GroupeTravail> findByDeletedAt(Date deletedAt,Pageable page);
	  Optional<GroupeTravail>  findBySlugAndDeletedAt(String slug,Date deletedAt);
      Collection<GroupeTravail> findByDeletedAt(Date deletedAt);
      GroupeTravail findByDeletedAtAndSlug(Date delete,String slug);
      Collection<GroupeTravail> findByProjet(Projet projet);
      Collection<GroupeTravail> findByMembresAndDeletedAt(Set<Employe> membres,Date deletedAt);
      

      
}

