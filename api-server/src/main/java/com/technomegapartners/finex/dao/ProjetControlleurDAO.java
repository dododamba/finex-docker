/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.ProjetControlleur;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface ProjetControlleurDAO {

	 ProjetControlleur getOneByNom(String libelle);
	 Page<ProjetControlleur> all(Pageable page);
	 Optional<ProjetControlleur>  show(String slug);
	 void update(ProjetControlleur entity);
	 void store(ProjetControlleur entity);
	 void delete(ProjetControlleur entity);
	 Collection<ProjetControlleur> allWithOutPagination();
}
