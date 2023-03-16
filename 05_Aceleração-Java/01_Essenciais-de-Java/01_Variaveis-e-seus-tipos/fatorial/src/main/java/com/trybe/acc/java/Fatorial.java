package com.trybe.acc.java;

/**
 * Classe para calcular o fatorial.
 */
public class Fatorial {

  /**
   * Calcula o fatorial de 18.
   */
  public static void main(String[] args) {
    long fatorial18 = 1;
    
    for (int count = 1; count < 18; count += 1)  {
      fatorial18 += fatorial18 * count;
    }
    
    System.out.println("O fatorial de 18 é igual a " + fatorial18);
    
  }

}
