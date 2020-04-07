/**
 * 
 */
package com.technomegapartners.finex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.InformationBanquaire;

/**
 * @author dominique
 *
 */

@Repository
public interface InformationBanquaireRepository extends JpaRepository<InformationBanquaire, Long> {

}
