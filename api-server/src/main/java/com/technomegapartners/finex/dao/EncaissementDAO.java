package com.technomegapartners.finex.dao;

import com.technomegapartners.finex.model.Encaissement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Collection;
import java.util.Optional;

public interface EncaissementDAO {
    Page<Encaissement> all(Pageable page);
    Optional<Encaissement> show(String slug);
    void update(Encaissement entity);
    void store(Encaissement entity);
    void delete(Encaissement entity);
    Collection<Encaissement> allWithOutPagination();
}
