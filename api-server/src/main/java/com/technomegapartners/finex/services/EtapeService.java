
/**
 *
 */
package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.technomegapartners.finex.dao.EtapeDAO;
import com.technomegapartners.finex.model.Etape;
import com.technomegapartners.finex.model.GroupeTravail;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.repository.EtapeRepository;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Service
public class EtapeService implements EtapeDAO {

    private EtapeRepository repository;

    /**
     *
     */
    @Autowired
    public EtapeService(EtapeRepository repository) {
        this.repository = repository;
    }

    @Override
    public Etape getOneByNom(String libelle) {
        return repository.findByNomAndDeletedAt(libelle, null);
    }

    @Override
    public Page<Etape> all(Pageable page) {
        Page<Etape> users = repository.findByDeletedAt(null,page);
        return users;
    }

    @Override
    public  Optional<Etape>  show(String slug) {
        return repository.findBySlugAndDeletedAt(slug, null);
    }

    @Override
    public void update(Etape entity) {
        entity.setUpdatedAt(new Date());
        repository.saveAndFlush(entity);
    }

    @Override
    public void store(Etape entity) {
        repository.save(entity);
    }

    @Override
    public void delete(Etape entity) {
        entity.setDeletedAt(new Date());
        update(entity);
    }

    @Override
    public Collection<Etape> allWithOutPagination() {
        return repository.findByDeletedAt(null);
    }

	@Override
	public Collection<Etape> allByGroupeTravail(GroupeTravail groupeTravail) {
		
		Collection<Etape> etapes = repository.findBygroupeTavail(groupeTravail);
	
		return etapes;
	}

	@Override
	public Page<Etape> allByProject(Pageable page, Projet projet) {
		Page<Etape> etapes = repository.findByDeletedAtAndProjet(null,projet,page);
		return etapes;
	}

}