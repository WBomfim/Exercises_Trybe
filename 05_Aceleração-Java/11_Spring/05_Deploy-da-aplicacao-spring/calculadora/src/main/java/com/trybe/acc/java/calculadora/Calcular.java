package com.trybe.acc.java.calculadora;

/**
 * Classe Calcular.
 * 
 */
public class Calcular {
  
  public static Valor somar(int a, int b) {
    return new Valor(a + b);
  }

  public static Valor subtrair(int a, int b) {
    return new Valor(a - b);
  }

  public static Valor multiplicar(int a, int b) {
    return new Valor(a * b);
  }

  /**
   * Método para dividir dois números.
   * 
   */
  public static Valor dividir(int a, int b) {
    if (a == 0 || b == 0) {
      return new Valor(0);
    }
    return new Valor(a / b);
  }

}
