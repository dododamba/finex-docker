package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;
import com.technomegapartners.finex.model.Entreprise;

/**
 * @author DOMINIQUE DAMBA
 * @version 1.0.0
 * @since 2019 {@link http://bit.ly/dominic-linked-in }
 */
public interface EntrepriseDAO {

	Entreprise getOneByNom(String libelle);

	Page<Entreprise> all(Pageable page);

	Optional<Entreprise> show(String slug);

	void update(Entreprise entity);

	void store(Entreprise entity);

	void delete(Entreprise entity);

	Collection<Entreprise> allWithOutPagination();
}