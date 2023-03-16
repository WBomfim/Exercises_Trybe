package com.trybe.polimorfismo;

/**
 * Class FuncionarioPessoaJuridica.
 *
 */
public class FuncionarioPessoaJuridica extends Funcionario {

  @Override
  public double calcularSalarioLiquido() {
    return getSalarioBruto() * 0.9;
  }

}
