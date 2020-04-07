package com.technomegapartners.finex.dao;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.MaitreDouvrage;
import com.technomegapartners.finex.model.Projet;

public interface ProjetDAO {
	Projet getOneByNom(String nom);

	Page<Projet> all(Pageable page);

	Optional<Projet> show(String slug);

	void update(Projet projet);

	void store(Projet projet);

	void delete(Projet projet);

	Collection<Projet> noPAgination();

	Page<Projet> collectProjectForConnectedUser(MaitreDouvrage maitreDouvrage,Pageable page);
	Collection<Projet> collectProjectForConnectedUserNoPagination(MaitreDouvrage maitreDouvrage);

}
