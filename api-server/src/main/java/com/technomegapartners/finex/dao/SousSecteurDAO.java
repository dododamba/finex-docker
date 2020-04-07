/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.SousSecteur;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface SousSecteurDAO {

	 SousSecteur getOneByNom(String libelle);
	 Page<SousSecteur> all(Pageable page);
	 Optional<SousSecteur>  show(String slug);
	 void update(SousSecteur entity);
	 void store(SousSecteur entity);
	 void delete(SousSecteur entity);
	 Collection<SousSecteur> allWithOutPagination();
}