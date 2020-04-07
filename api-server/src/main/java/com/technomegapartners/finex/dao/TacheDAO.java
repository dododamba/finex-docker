
/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;

import com.technomegapartners.finex.model.Tache;

/**
 * @author DOMINIQUE DAMBA
 *
 */
public interface TacheDAO {

    Tache getOneByNom(String libelle);
    Page<Tache> all(Pageable page);
    Optional<Tache>  show(String slug);
    void update(Tache entity);
    void store(Tache entity);
    void delete(Tache entity);
    Collection<Tache> allWithOutPagination();
    Collection<Tache> getTaskForConnectedUser(String userSlug);
}

