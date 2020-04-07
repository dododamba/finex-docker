package com.technomegapartners.finex.services;

import com.technomegapartners.finex.dao.DecaissementDAO;
import com.technomegapartners.finex.model.Tirage;
import com.technomegapartners.finex.repository.DecaissementRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

@Service
public class DecaissementService implements DecaissementDAO {

    private DecaissementRepository  repository;

    public DecaissementService(DecaissementRepository repository) {
        this.repository = repository;
    }

    @Override
    public Page<Tirage> all(Pageable page) {
        return repository.findByDeletedAt(null,page);
    }

    @Override
    public Optional<Tirage> show(String slug) {
        return repository.findBySlugAndDeletedAt(slug,null);
    }

    @Override
    public void update(Tirage entity) {
        entity.setUpdatedAt(new Date());
        repository.saveAndFlush(entity);
    }

    @Override
    public void store(Tirage entity) {
      repository.save(entity);
    }

    @Override
    public void delete(Tirage entity) {
        entity.setDeletedAt(new Date());
        update(entity);
    }

    @Override
    public Collection<Tirage> allWithOutPagination() {
        return repository.findByDeletedAt(null);
    }
}
