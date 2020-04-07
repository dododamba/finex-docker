
/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.Institution;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface InstitutionDAO {

	 Institution getOneByNom(String libelle);
	 Page<Institution> all(Pageable page);
	 Optional<Institution>  show(String slug);
	 void update(Institution entity);
	 void store(Institution entity);
	 void delete(Institution entity);
	 Collection<Institution> allWithOutPagination();
}