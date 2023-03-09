package com.trybe.acc.java;

/**
 * Classe Nota.
 *
 */
public class Nota {
  /**
   * Método calculaMedia.
   */
  public static double calcularMedia(double n1, double n2, double n3, double n4) {
    double totalNotas = n1 + n2 + n3 + n4;
    
    return totalNotas / 4;
  }
}
