/**
 *
 */
package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;
import com.technomegapartners.finex.model.Region;

/**
 * @author DOMINIQUE DAMBA
 * @version 1.0.0
 * @since 2019 {@link http://bit.ly/dominic-linked-in }
 */
public interface RegionDAO {

	Region getOneByNom(String libelle);

	Page<Region> all(Pageable page);

	Optional<Region> show(String slug);

	void update(Region entity);

	void store(Region entity);

	void delete(Region entity);

	Collection<Region> allWithOutPagination();
}
