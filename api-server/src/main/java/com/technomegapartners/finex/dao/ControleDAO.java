package com.technomegapartners.finex.dao;


import java.util.*;

import org.springframework.data.domain.*;
import com.technomegapartners.finex.model.Controle;


public interface ControleDAO {
	Controle getOneByName(String libelle);

	Page<Controle> all(Pageable page);

	Optional<Controle> show(String slug);

	void update(Controle entity);

	void store(Controle entity);

	void delete(Controle entity);

	Collection<Controle> allWithOutPagination();
}
