package com.trybe.acc.java;

import java.time.LocalDateTime;

/**
 * Class SimuladorRendimento.
 *
 */
public class SimuladorRendimento {

  /**
   * Method main.
   *
   */
  public static void main(String[] args) {
    SimuladorRendimento obj = new SimuladorRendimento();
    double inicial = 500;
    double objetivo = 5000;
    System.out.println("Com " + inicial + " seu rendimento será " + objetivo + " no ano "
        + obj.simularRendimentoAnos(inicial, objetivo));
  }

  /**
   * Method simularRendimentoAnos.
   *
   * @param valorInicial - valor que será iniciado o investimento.
   * @param valorObjetivo - valor alvo para o rendimento.
   * @return - Retorna o ano em que a aplicação atingirá o valor desejado.
   *
   */
  public int simularRendimentoAnos(double valorInicial, double valorObjetivo) {
    LocalDateTime anoAtual = LocalDateTime.now();

    while (valorInicial < valorObjetivo) {
      valorInicial = valorInicial * 1.1;
      anoAtual = anoAtual.plusYears(1);
    }

    return anoAtual.getYear();
  }
}
