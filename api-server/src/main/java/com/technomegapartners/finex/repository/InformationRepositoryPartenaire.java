package com.technomegapartners.finex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.InformationPartenaire;

/**
 * 
 */

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface InformationRepositoryPartenaire extends JpaRepository<InformationPartenaire, Long> {

}
