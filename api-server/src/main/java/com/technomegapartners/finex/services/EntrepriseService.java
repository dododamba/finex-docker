package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.EntrepriseDAO;
import com.technomegapartners.finex.model.Entreprise;
import com.technomegapartners.finex.repository.EntrepriseRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class EntrepriseService implements EntrepriseDAO {

    private EntrepriseRepository repository;

    /**
     *
     */
    @Autowired
    public EntrepriseService(EntrepriseRepository repository) {
        this.repository = repository;
    }

    @Override
    public Entreprise getOneByNom(String libelle) {
        return repository.findByNomAndDeletedAt(libelle, null);
    }

    @Override
    public Page<Entreprise> all(Pageable page) {
        Page<Entreprise> users = repository.findByDeletedAt(null,page);
        return users;
    }

    @Override
    public  Optional<Entreprise>  show(String slug) {
        return repository.findBySlugAndDeletedAt(slug, null);
    }

    @Override
    public void update(Entreprise entity) {
        entity.setUpdatedAt(new Date());
        repository.save(entity);
    }

    @Override
    public void store(Entreprise entity) {
        repository.save(entity);
    }

    @Override
    public void delete(Entreprise entity) {
        entity.setDeletedAt(new Date());
        update(entity);
    }

    @Override
    public Collection<Entreprise> allWithOutPagination() {
        return repository.findByDeletedAt(null);
    }


}