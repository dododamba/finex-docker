/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;
import com.technomegapartners.finex.model.TypeMarche;

/**
 * @author DOMINIQUE DAMBA
 * @version 1.0.0
 * @since 2019 {@link http://bit.ly/dominic-linked-in }
 */
public interface TypeMarcheDAO {

	TypeMarche getOneByNom(String libelle);

	Page<TypeMarche> all(Pageable page);

	Optional<TypeMarche> show(String slug);

	void update(TypeMarche entity);

	void store(TypeMarche entity);

	void delete(TypeMarche entity);

	Collection<TypeMarche> allWithOutPagination();
}