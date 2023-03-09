package com.trybe.acc.java;

/**
 * Class Divisor.
 *
 */
public class Divisor {
  
  /**
   * Method dividir.
   *
   * @param dividendo recebe o número a ser dividido.
   * @param divisor recebe o divisor da operação.
   *
   */
  public int dividir(int dividendo, int divisor) {
    try {
      return dividendo / divisor;
    } catch (ArithmeticException e) {
      return 0;
    }
  }
}
