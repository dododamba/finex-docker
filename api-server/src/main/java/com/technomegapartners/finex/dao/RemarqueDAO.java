/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.Remarque;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface RemarqueDAO {

	 Page<Remarque> all(Pageable page);
	 Optional<Remarque>  show(String slug);
	 void update(Remarque entity);
	 void store(Remarque entity);
	 void delete(Remarque entity);
	 Collection<Remarque> allWithOutPagination();
}
