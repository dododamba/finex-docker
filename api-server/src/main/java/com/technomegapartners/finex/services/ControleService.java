package com.technomegapartners.finex.services;


import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.ControleDAO;
import com.technomegapartners.finex.model.Controle;
import com.technomegapartners.finex.repository.ControleRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class ControleService implements ControleDAO {

    private ControleRepository repository;

    /**
     *
     */
    @Autowired
    public ControleService(ControleRepository repository) {
        this.repository = repository;
    }

    @Override
    public Controle getOneByName(String libelle) {
        return repository.findByLibelleAndDeletedAt(libelle, null);
    }

    @Override
    public Page<Controle> all(Pageable page) {
        Page<Controle> users = repository.findByDeletedAt(null,page);
        return users;
    }

    @Override
    public  Optional<Controle>  show(String slug) {
        return repository.findBySlugAndDeletedAt(slug, null);
    }

    @Override
    public void update(Controle entity) {
        entity.setUpdatedAt(new Date());
        repository.save(entity);
    }

    @Override
    public void store(Controle entity) {
        repository.save(entity);
    }

    @Override
    public void delete(Controle entity) {
        entity.setDeletedAt(new Date());
        update(entity);
    }

    @Override
    public Collection<Controle> allWithOutPagination() {
        return repository.findByDeletedAt(null);
    }


}
