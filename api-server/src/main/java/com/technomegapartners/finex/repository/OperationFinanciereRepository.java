package com.technomegapartners.finex.repository;

import com.technomegapartners.finex.model.OperationFiananciere;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

@NoRepositoryBean
public interface OperationFinanciereRepository
        <T extends OperationFiananciere> extends
        JpaRepository<T, Long>  {

    Page<T> findByDeletedAt(Date deletedAt, Pageable page);
    Optional<T> findBySlugAndDeletedAt(String slug, Date deletedAt);
    Collection<T> findByDeletedAt(Date delete);
}
