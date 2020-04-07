package com.technomegapartners.finex.dao;

import com.technomegapartners.finex.model.Financement;
import com.technomegapartners.finex.model.Projet;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Collection;
import java.util.Optional;

public interface FinancementDAO {

    Collection<Financement> getOneByNom(String libelle);
    Page<Financement> all(Pageable page);
    Optional<Financement> show(String slug);
    void update(Financement entity);
    void store(Financement entity);
    void delete(Financement entity);
    Collection<Financement> allWithOutPagination();
    Collection<Financement> getByProjet(Projet projet);
}
