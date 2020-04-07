package com.technomegapartners.finex.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.technomegapartners.finex.dao.ProjetDAO;
import com.technomegapartners.finex.model.MaitreDouvrage;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.repository.ProjetRepository;

@Service
public class ProjetService implements ProjetDAO {

    private ProjetRepository repository;

    /** 
     *  
     */
    @Autowired
    public ProjetService(ProjetRepository repository) {
        this.repository = repository;
    }

    @Override
    public Projet getOneByNom(String nom) {
        return repository.findByNomAndDeletedAt(nom, null);
    }

    @Override
    public Page<Projet> all(Pageable page) {
        Page<Projet> users = repository.findByDeletedAt(null,page);
        return users;
    }

    @Override
    public  Optional<Projet>  show(String slug) {
        return repository.findBySlugAndDeletedAt(slug, null);
    }

    @Override
    public void update(Projet projet) {
        projet.setUpdatedAt(new Date());
      repository.saveAndFlush(projet);
    }

    @Override
    public void store(Projet projet) {
       repository.save(projet);
    }

    @Override
    public void delete(Projet projet) {
         projet.setDeletedAt(new Date());
         update(projet);
    }

    @Override
    public Collection<Projet> noPAgination() {
        return repository.findByDeletedAt(null);
    }

	@Override
	public Page<Projet> collectProjectForConnectedUser(MaitreDouvrage maitreDouvrage,Pageable pageable) {
		return repository.findByMaitreDouvrage(maitreDouvrage,pageable);
	}

	@Override
	public Collection<Projet> collectProjectForConnectedUserNoPagination(MaitreDouvrage maitreDouvrage) {
		// TODO Auto-generated method stub
		return repository.findByMaitreDouvrage(maitreDouvrage);
	}

    

}
