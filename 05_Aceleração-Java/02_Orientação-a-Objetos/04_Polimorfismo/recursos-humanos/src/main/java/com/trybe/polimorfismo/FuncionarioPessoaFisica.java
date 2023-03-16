package com.trybe.polimorfismo;

/**
 * Class FuncionarioPessoaFisica.
 *
 */
public class FuncionarioPessoaFisica extends Funcionario {

  @Override
  public double calcularSalarioLiquido() {
    return getSalarioBruto() * 0.8;
  }

}
