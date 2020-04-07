package com.technomegapartners.finex.dao;

import java.util.*;

import org.springframework.data.domain.*;
import com.technomegapartners.finex.model.MaitreDoeuvreDelegue;

/**
 * @author DOMINIQUE DAMBA
 * @version 1.0.0
 * @since 2019 {@link http://bit.ly/dominic-linked-in }
 */
public interface MaitreDoeuvreDelegueDAO {

	MaitreDoeuvreDelegue getOneByName(String libelle);

	Page<MaitreDoeuvreDelegue> all(Pageable page);

	Optional<MaitreDoeuvreDelegue> show(String slug);

	void update(MaitreDoeuvreDelegue entity);

	void store(MaitreDoeuvreDelegue entity);

	void delete(MaitreDoeuvreDelegue entity);

	Collection<MaitreDoeuvreDelegue> allWithOutPagination();
}
