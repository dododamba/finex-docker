/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.MaitreDouvrage;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface MaitreDouvrageDAO {

	MaitreDouvrage getOneByNom(String libelle);

	Page<MaitreDouvrage> all(Pageable page);

	Optional<MaitreDouvrage> show(String slug);

	void update(MaitreDouvrage entity);

	void store(MaitreDouvrage entity);

	void delete(MaitreDouvrage entity);

	Collection<MaitreDouvrage> allWithOutPagination();
}
