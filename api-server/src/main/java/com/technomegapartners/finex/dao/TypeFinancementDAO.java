/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.TypeFinancement;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface TypeFinancementDAO {

	TypeFinancement getOneByLibelle(String libelle);

	Page<TypeFinancement> all(Pageable page);

	Optional<TypeFinancement> show(String slug);

	void update(TypeFinancement entity);

	void store(TypeFinancement entity);

	void delete(TypeFinancement entity);

	Collection<TypeFinancement> allWithOutPagination();
}
