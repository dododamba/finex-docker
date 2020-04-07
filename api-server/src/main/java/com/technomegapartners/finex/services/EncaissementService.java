package com.technomegapartners.finex.services;

import com.technomegapartners.finex.dao.EncaissementDAO;
import com.technomegapartners.finex.model.Encaissement;
import com.technomegapartners.finex.repository.EncaissementRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

@Service
public class EncaissementService implements EncaissementDAO {
    private EncaissementRepository repository;

    public EncaissementService(EncaissementRepository repository) {
        this.repository = repository;
    }

    @Override
    public Page<Encaissement> all(Pageable page) {
        return repository.findByDeletedAt(null,page);
    }

    @Override
    public Optional<Encaissement> show(String slug) {
        return repository.findBySlugAndDeletedAt(slug,null);
    }

    @Override
    public void update(Encaissement entity) {
        entity.setUpdatedAt(new Date());
        repository.saveAndFlush(entity);
    }

    @Override
    public void store(Encaissement entity) {
        repository.save(entity);
    }

    @Override
    public void delete(Encaissement entity) {
        entity.setDeletedAt(new Date());
        update(entity);
    }

    @Override
    public Collection<Encaissement> allWithOutPagination() {
        return repository.findByDeletedAt(null);
    }
}
