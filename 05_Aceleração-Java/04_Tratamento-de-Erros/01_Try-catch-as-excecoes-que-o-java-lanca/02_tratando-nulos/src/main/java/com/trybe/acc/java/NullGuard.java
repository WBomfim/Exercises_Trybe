package com.trybe.acc.java;

/**
 * Clss NullGuard.
 *
 */
public class NullGuard {

  /**
   * Method printName.
   *
   * @param divisor Recebe um número inteiro.
   * @return Retorna uma string com um nome.
   */
  public String printName(int divisor) {
    NullGenerator nullGenerator = new NullGenerator();

    try {
      return nullGenerator.getNome(divisor);
    } catch (NullPointerException error) {
      return "Nome nulo";
    }
  }
}
