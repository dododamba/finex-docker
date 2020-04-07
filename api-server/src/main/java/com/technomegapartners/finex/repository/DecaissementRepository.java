package com.technomegapartners.finex.repository;

import com.technomegapartners.finex.model.Tirage;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface DecaissementRepository extends OperationFinanciereRepository<Tirage> {
}
