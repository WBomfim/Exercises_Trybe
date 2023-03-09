package com.trybe.acc.java;

import java.util.Locale;
import java.util.Scanner;

/**
 * Classe para calcular IMC.
 */
public class Imc {

  /**
   * Método para executar a coleta de dados, calcular e exibir o IMC.
   */
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in).useLocale(Locale.US);

    System.out.println("Digite o peso:");
    float peso = scan.nextFloat();

    System.out.println("Digite a aultura:");
    float altura = scan.nextFloat();

    float imc = (float) (peso / Math.pow(altura, 2));

    System.out.println(imc);

    scan.close();
  }

}
