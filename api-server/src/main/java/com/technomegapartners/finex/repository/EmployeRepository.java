/**
 * 
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Employe;
import com.technomegapartners.finex.model.User;

/**
 * @author DOMINIQUE DAMBA
 *
 */

@Repository
public interface EmployeRepository extends JpaRepository<Employe, Long> {
	Employe findBySlug(String slug);

	Employe findByNomAndPrenomAndDeletedAt(String nom, String Prenom, Date deletedAt);

	Employe findByIdAndDeletedAt(Long id, Date deletedAt);

	Collection<Employe> findByDeletedAt(Date deletedAt);

	Optional<Employe> findBySlugAndDeletedAt(String slug, Date deletedAt);

	Optional<Employe> findByUser(User user);

}
