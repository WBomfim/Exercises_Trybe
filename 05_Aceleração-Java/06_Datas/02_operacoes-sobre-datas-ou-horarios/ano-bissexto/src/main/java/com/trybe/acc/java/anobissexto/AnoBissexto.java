package com.trybe.acc.java.anobissexto;

import java.time.LocalDate;
import java.time.Year;
import java.time.format.DateTimeFormatter;

/**
 * Class AnoBissexto.
 *
 */
public class AnoBissexto {

  /**
   * Method identificarAnoBissexto verifica se um determinado ano é bissexto.
   *
   * @param ano - Deve ser uma string com o ano a ser verificado.
   * @return - Retorna um booleano após a verificação.
   * 
   */
  public boolean identificarAnoBissexto(int ano) {
    if (Year.isLeap(ano)) {
      return true;
    }

    return false;
  }

  /**
   * Method identificarProximoAnoBissexto verifica qual o próximo ano bissexto a partir de uma data
   * informada.
   *
   * @param data - Deve ser uma string no formato brasileiro de data (dd/mm/yyyy).
   * @return - retorna o ano bissexto subsequente a data informada.
   *
   */
  public int identificarProximoAnoBissexto(String data) {
    DateTimeFormatter formatoData = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    LocalDate dataInformada = LocalDate.parse(data, formatoData);

    while (!dataInformada.isLeapYear()) {
      dataInformada = dataInformada.plusYears(1);
    }

    return dataInformada.getYear();
  }
}
