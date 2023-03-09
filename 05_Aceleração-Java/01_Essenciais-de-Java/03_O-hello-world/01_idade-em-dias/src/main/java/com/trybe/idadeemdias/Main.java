package com.trybe.idadeemdias;

import java.util.Locale;
import java.util.Scanner;

/**
 * Classe Main.
 *
 */
public class Main {

  /**
   * Metodo Principal.
   * 
   */
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in).useLocale(Locale.US);
    
    System.out.println("Qual é o seu nome?");
    final String nome = scan.next();
    
    System.out.print("Qual é sua idade em anos, meses e dias?");
    System.out.println("anos:");
    int anos = scan.nextInt();
    
    System.out.println("meses:");
    int meses = scan.nextInt();
    
    System.out.println("dias:");
    int dias = scan.nextInt();
    
    int diasTotais = Pessoa.calcularIdadeEmDias(anos, meses, dias);
    
    StringBuilder resultado = new StringBuilder();
    
    resultado.append("Olá ").append(nome).append(", sua idade em dias é ").append(diasTotais);
    
    System.out.println(resultado);
    
    scan.close();
  }
  
}