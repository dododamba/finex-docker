
/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Projet;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface GroupeTravailDAO {

	 GroupeTravail getOneByNom(String libelle);
	 Page<GroupeTravail> all(Pageable page);
	 Optional<GroupeTravail>  show(String slug);
	 void update(GroupeTravail entity);
	 void store(GroupeTravail entity);
	 void delete(GroupeTravail entity);
	 Collection<GroupeTravail> allWithOutPagination();
	 Collection<GroupeTravail> allByProjet(Projet projet);
	 Collection<GroupeTravail> getGroupsForLoggedEmploye(String slug);


}