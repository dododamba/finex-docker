/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.Etape;
import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Projet;

/**
 * @author DOMINIQUE DAMBA
 * @version 1.0.0
 * @since 2019 {@link http://bit.ly/dominic-linked-in }
 */
public interface EtapeDAO {

	Etape getOneByNom(String libelle);

	Page<Etape> all(Pageable page);

	Optional<Etape> show(String slug);

	void update(Etape entity);

	void store(Etape entity);

	void delete(Etape entity);

	Collection<Etape> allWithOutPagination();

	Collection<Etape> allByGroupeTravail(GroupeTravail groupeTravail);

	Page<Etape> allByProject(Pageable page, Projet projet);
}