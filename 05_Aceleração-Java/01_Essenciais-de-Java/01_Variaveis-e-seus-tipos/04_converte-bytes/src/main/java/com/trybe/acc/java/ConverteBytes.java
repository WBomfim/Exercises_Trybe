package com.trybe.acc.java;

import java.util.Locale;
import java.util.Scanner;

/**
 * Classe para converter bytes em bits.
 */
public class ConverteBytes {

  /**
   * Método que coleta os dados e exibi o resultado.
   */
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in).useLocale(Locale.US);

    System.out.println("Digite um número:");
    byte valor = scan.nextByte();

    int qtdBits = valor * 8;

    System.out.println(valor + " bytes correspondem a " + qtdBits + " bits");

  }
}
