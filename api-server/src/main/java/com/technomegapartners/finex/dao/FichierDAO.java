
/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.Fichier;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface FichierDAO {

	Fichier getOneByNom(String libelle);

	Page<Fichier> all(Pageable page);

	Optional<Fichier> show(String slug);

	void update(Fichier entity);

	void store(Fichier entity);

	void delete(Fichier entity);

	Collection<Fichier> allWithOutPagination();
}
