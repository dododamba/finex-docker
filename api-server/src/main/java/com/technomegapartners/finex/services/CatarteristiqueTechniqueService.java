/**
 * 
 */
package com.technomegapartners.finex.services;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.dao.CatacteristiqueTechniqueDAO;
import com.technomegapartners.finex.model.CatarteristiqueTechnique;
import com.technomegapartners.finex.model.Projet;
import com.technomegapartners.finex.repository.CatarteristiqueTechniqueRepository;

/**
 * @author user
 *
 */

@Repository
public class CatarteristiqueTechniqueService implements  CatacteristiqueTechniqueDAO {
	  private CatarteristiqueTechniqueRepository repository;

	    /**
	     *
	     */
	    @Autowired
	    public CatarteristiqueTechniqueService(CatarteristiqueTechniqueRepository repository) {
	        this.repository = repository;
	    }

	    @Override
	    public CatarteristiqueTechnique getOneByNom(String libelle) {
	        return repository.findByLibelleAndDeletedAt(libelle, null);
	    }

	    @Override
	    public Page<CatarteristiqueTechnique> all(Pageable page) {
	        Page<CatarteristiqueTechnique> users = repository.findByDeletedAt(null,page);
	        return users;
	    }

	    @Override
	    public  Optional<CatarteristiqueTechnique>  show(String slug) {
	        return repository.findBySlugAndDeletedAt(slug, null);
	    }

	    @Override
	    public void update(CatarteristiqueTechnique entity) {
	        entity.setUpdatedAt(new Date());
	        repository.saveAndFlush(entity);
	    }

	    @Override
	    public void store(CatarteristiqueTechnique entity) {
	        repository.save(entity);
	    }

	    @Override
	    public void delete(CatarteristiqueTechnique entity) {
	        entity.setDeletedAt(new Date());
	        update(entity);
	    }

	    @Override
	    public Collection<CatarteristiqueTechnique> allWithOutPagination() {
	        return repository.findByDeletedAt(null);
	    }

		@Override
		public Collection<CatarteristiqueTechnique> allByProjet(Projet projet) {
			
			Collection<CatarteristiqueTechnique> ctechniques = repository.findByProjet(projet);
		
			return ctechniques;
		}
}
