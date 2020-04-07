
/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.Secteur;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface SecteurDAO {

	 Secteur getOneByNom(String libelle);
	 Page<Secteur> all(Pageable page);
	 Optional<Secteur>  show(String slug);
	 void update(Secteur entity);
	 void store(Secteur entity);
	 void delete(Secteur entity);
	 Collection<Secteur> allWithOutPagination();
}
