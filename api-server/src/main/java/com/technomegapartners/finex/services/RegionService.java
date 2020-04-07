/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.RegionDAO;
import com.technomegapartners.finex.model.Region;
import com.technomegapartners.finex.repository.RegionRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class RegionService implements RegionDAO {

    private RegionRepository repository;

    /**
     *
     */
    @Autowired
    public RegionService(RegionRepository repository) {
        this.repository = repository;
    }

    @Override
    public Region getOneByNom(String libelle) {
        return repository.findByNomAndDeletedAt(libelle, null);
    }

    @Override
    public Page<Region> all(Pageable page) {
        Page<Region> users = repository.findByDeletedAt(null,page);
        return users;
    }

    @Override
    public  Optional<Region>  show(String slug) {
        return repository.findBySlugAndDeletedAt(slug, null);
    }

    @Override
    public void update(Region entity) {
        entity.setUpdatedAt(new Date());
        repository.saveAndFlush(entity);
    }

    @Override
    public void store(Region entity) {
        repository.save(entity);
    }

    @Override
    public void delete(Region entity) {
        entity.setDeletedAt(new Date());
        update(entity);
    }

    @Override
    public Collection<Region> allWithOutPagination() {
        return repository.findByDeletedAt(null);
    }


}
