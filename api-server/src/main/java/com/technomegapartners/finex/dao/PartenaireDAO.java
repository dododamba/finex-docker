/**
 * 
 */
package com.technomegapartners.finex.dao;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.technomegapartners.finex.model.Partenaire;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface PartenaireDAO {
	Partenaire getOneByNom(String nom);

	Page<Partenaire> all(Pageable page);

	Collection<Partenaire> allWithoutPagination();

	Optional<Partenaire> show(String slug);

	void update(Partenaire partenaire);

	void store(Partenaire partenaire);

	void delete(Partenaire partenaire);

}
