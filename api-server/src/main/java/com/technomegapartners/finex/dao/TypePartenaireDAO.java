/**
 * 
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.TypePartenaire;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface TypePartenaireDAO {

	TypePartenaire getOneByLibelle(String libelle);

	Page<TypePartenaire> all(Pageable page);

	Optional<TypePartenaire> show(String slug);

	void update(TypePartenaire typePartenaire);

	void store(TypePartenaire typePartenaire);

	void delete(TypePartenaire typePartenaire);

	Collection<TypePartenaire> allWithOutPagination();
}
