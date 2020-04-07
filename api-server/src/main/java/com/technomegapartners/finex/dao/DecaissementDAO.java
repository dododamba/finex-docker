package com.technomegapartners.finex.dao;

import com.technomegapartners.finex.model.Tirage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Collection;
import java.util.Optional;

public interface DecaissementDAO {

    Page<Tirage> all(Pageable page);
    Optional<Tirage> show(String slug);
    void update(Tirage entity);
    void store(Tirage entity);
    void delete(Tirage entity);
    Collection<Tirage> allWithOutPagination();
}
