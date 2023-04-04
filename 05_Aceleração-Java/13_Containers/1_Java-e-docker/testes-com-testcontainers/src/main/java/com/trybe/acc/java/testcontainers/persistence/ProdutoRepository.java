package com.trybe.acc.java.testcontainers.persistence;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Classe responsável por expor os endpoints da API.
 * 
 */
@Repository
public interface ProdutoRepository extends MongoRepository<Produto, String> {}
