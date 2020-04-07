package com.technomegapartners.finex.repository;

import com.technomegapartners.finex.model.Encaissement;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface EncaissementRepository extends OperationFinanciereRepository<Encaissement> {
}
