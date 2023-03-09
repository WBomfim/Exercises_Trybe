package com.trybe.acc.java;

import java.util.Locale;
import java.util.Scanner;

/**
 * Classe Main.
 */
public class Main {

  /**
   * Método main.
   * 
   */
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in).useLocale(Locale.US);
    
    System.out.println("Qual é o seu nome?");
    final String nome = scan.next();
        
    System.out.println("Entre com as notas das provas:");
    double[] notas = new double[4];
    
    for (int index = 0; index < 4; index += 1) {
      System.out.println("Avaliação " + (index + 1));
      double nota = scan.nextDouble();
      notas[index] = nota;
    }
    
    double media = Nota.calcularMedia(notas[0], notas[1], notas[2], notas[3]);
    
    StringBuilder resultado = new StringBuilder();
    resultado.append("Olá, ").append(nome).append(", sua média é ").append(media);
    
    System.out.println(resultado);
    
    scan.close();
  }

}
