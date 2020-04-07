/**
 *
 */
package com.technomegapartners.finex.repository;

import java.util.*;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technomegapartners.finex.model.Region;

/**
 * @author DOMINIQUE DAMBA
 *
 */
@Repository
public interface RegionRepository extends JpaRepository<Region, Long> {
    Region findByNomAndDeletedAt(String libelle,Date deletedAt);
    Region findByIdAndDeletedAt(Long id,Date deletedAt);
    Page<Region> findByDeletedAt(Date deletedAt,Pageable page);
    Optional<Region>  findBySlugAndDeletedAt(String slug,Date deletedAt);
    Collection<Region> findByDeletedAt(Date deletedAt);
}