package com.trybe.idadeemdias;

/**
 * Classe Pessoa.
 *
 */
public class Pessoa {
  /**
   * Transforma período em dias.
   */
  public static int calcularIdadeEmDias(int anos, int meses, int dias) {
    int anosConvertido = converteAno(anos);
    int mesesConvertido = converteMes(meses);
    
    return anosConvertido + mesesConvertido + dias;
  }
  
  public static int converteAno(int anos) {
    return anos * 365;
  }
  
  public static int converteMes(int meses) {
    return meses * 30;
  }
  
}
