package com.technomegapartners.finex.services;

import com.technomegapartners.finex.dao.FinancementDAO;
import com.technomegapartners.finex.model.Financement;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.repository.FichierRepository;
import com.technomegapartners.finex.repository.FinancementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Optional;

@Service
public class FinancementService  implements FinancementDAO {

    private FinancementRepository repository;


   @Autowired
    public FinancementService(FinancementRepository repository) {
        this.repository = repository;
    }

    @Override
    public Collection<Financement> getOneByNom(String libelle) {
        return repository.findByLibelleAndDeletedAt(libelle,null);
    }

    @Override
    public Page<Financement> all(Pageable page) {
        Page<Financement> financements = repository.findByDeletedAt(null,page);
        return financements;
    }

    @Override
    public Optional<Financement> show(String slug) {
        return repository.findBySlugAndDeletedAt(slug,null);
    }

    @Override
    public void update(Financement entity) {
        repository.saveAndFlush(entity);
    }

    @Override
    public void store(Financement entity) {
            repository.save(entity);
    }

    @Override
    public void delete(Financement entity) {
        entity.setDeletedAt(new Date());
        update(entity);
    }

    @Override
    public Collection<Financement> allWithOutPagination() {

            return repository.findByDeletedAt(null);
    }

	@Override
	public Collection<Financement> getByProjet(Projet projet) {
		return repository.findByProjet(projet);
	}
}
