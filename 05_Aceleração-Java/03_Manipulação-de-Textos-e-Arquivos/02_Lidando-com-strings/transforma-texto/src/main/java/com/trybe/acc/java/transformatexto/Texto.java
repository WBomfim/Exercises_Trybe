package com.trybe.acc.java.transformatexto;

/**
 * class Texto.
 *
 */
public class Texto {

  /**
   * Method transformaTexto.
   */
  public String transformaTexto(String frase) {
    String fraseSemMais = frase.replace("+", " ");
    Integer indexA = fraseSemMais.indexOf("a");
    if (indexA % 2 == 0) {
      return fraseSemMais.toUpperCase();
    } 
      
    return fraseSemMais.split(" ")[0];
  }  
}
