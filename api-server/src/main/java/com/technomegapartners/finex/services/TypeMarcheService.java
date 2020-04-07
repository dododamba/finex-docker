
/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.TypeMarcheDAO;
import com.technomegapartners.finex.model.TypeMarche;
import com.technomegapartners.finex.repository.TypeMarcheRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class TypeMarcheService implements TypeMarcheDAO {

    private TypeMarcheRepository repository;

    /**
     *
     */
    @Autowired
    public TypeMarcheService(TypeMarcheRepository repository) {
        this.repository = repository;
    }

    @Override
    public TypeMarche getOneByNom(String libelle) {
        return repository.findByNomAndDeletedAt(libelle, null);
    }

    @Override
    public Page<TypeMarche> all(Pageable page) {
        Page<TypeMarche> users = repository.findByDeletedAt(null,page);
        return users;
    }

    @Override
    public  Optional<TypeMarche>  show(String slug) {
        return repository.findBySlugAndDeletedAt(slug, null);
    }

    @Override
    public void update(TypeMarche entity) {
        entity.setUpdatedAt(new Date());
        repository.saveAndFlush(entity);
    }

    @Override
    public void store(TypeMarche entity) {
        repository.save(entity);
    }

    @Override
    public void delete(TypeMarche entity) {
        entity.setDeletedAt(new Date());
        update(entity);
    }

    @Override
    public Collection<TypeMarche> allWithOutPagination() {
        return repository.findByDeletedAt(null);
    }


}