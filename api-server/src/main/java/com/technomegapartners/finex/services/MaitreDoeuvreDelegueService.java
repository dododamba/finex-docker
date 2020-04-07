package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.MaitreDoeuvreDelegueDAO;
import com.technomegapartners.finex.model.MaitreDoeuvreDelegue;
import com.technomegapartners.finex.repository.MaitreDoeuvreDelegueRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class MaitreDoeuvreDelegueService implements MaitreDoeuvreDelegueDAO {

    private MaitreDoeuvreDelegueRepository repository;

    /**
     *
     */
    @Autowired
    public MaitreDoeuvreDelegueService(MaitreDoeuvreDelegueRepository repository) {
        this.repository = repository;
    }

    @Override
    public MaitreDoeuvreDelegue getOneByName(String libelle) {
        return repository.findByNomAndDeletedAt(libelle, null);
    }

    @Override
    public Page<MaitreDoeuvreDelegue> all(Pageable page) {
        Page<MaitreDoeuvreDelegue> users = repository.findByDeletedAt(null,page);
        return users;
    }

    @Override
    public  Optional<MaitreDoeuvreDelegue>  show(String slug) {
        return repository.findBySlugAndDeletedAt(slug, null);
    }

    @Override
    public void update(MaitreDoeuvreDelegue entity) {
        entity.setUpdatedAt(new Date());
        repository.save(entity);
    }

    @Override
    public void store(MaitreDoeuvreDelegue entity) {
        repository.save(entity);
    }

    @Override
    public void delete(MaitreDoeuvreDelegue entity) {
        entity.setDeletedAt(new Date());
        update(entity);
    }

    @Override
    public Collection<MaitreDoeuvreDelegue> allWithOutPagination() {
        return repository.findByDeletedAt(null);
    }


}