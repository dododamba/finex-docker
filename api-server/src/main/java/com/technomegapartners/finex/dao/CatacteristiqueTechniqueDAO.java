package com.technomegapartners.finex.dao;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.technomegapartners.finex.model.CatarteristiqueTechnique;
import com.technomegapartners.finex.model.Projet;

public interface CatacteristiqueTechniqueDAO {
	  CatarteristiqueTechnique getOneByNom(String libelle);
	    Page<CatarteristiqueTechnique> all(Pageable page);
	    Optional<CatarteristiqueTechnique>  show(String slug);
	    void update(CatarteristiqueTechnique entity);
	    void store(CatarteristiqueTechnique entity);
	    void delete(CatarteristiqueTechnique entity);
	    Collection<CatarteristiqueTechnique> allWithOutPagination();
	    Collection<CatarteristiqueTechnique> allByProjet(Projet projet);
}
