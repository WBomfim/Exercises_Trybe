package com.trybe.acc.java.iocdi.sistemapagamentos.repository;

import com.trybe.acc.java.iocdi.sistemapagamentos.model.Payment;
import org.springframework.stereotype.Repository;

/**
 * Repository PagamentoRepository.
 * 
 */
@Repository
public class PagamentoRepository {
  public Payment criarPagamento(Payment pagamento) {
    return pagamento;
  }
}
