/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.MaitreDoeuvre;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface MaitreDoeuvreDAO {

	MaitreDoeuvre getOneByNom(String libelle);

	Page<MaitreDoeuvre> all(Pageable page);

	Optional<MaitreDoeuvre> show(String slug);

	void update(MaitreDoeuvre entity);

	void store(MaitreDoeuvre entity);

	void delete(MaitreDoeuvre entity);

	Collection<MaitreDoeuvre> allWithOutPagination();
}