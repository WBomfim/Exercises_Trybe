package com.trybe.contabancaria;

/**
 * Class ValidaCpf.
 **/
public class ValidaCpf {

  /**
   * Método para verificar se um CPF é válido.
   *
   * @param cpf - Ums string com os 11 digitos de um CPF
   * @return - Retorna um valor boleano
   */
  public static boolean validarCpf(String cpf) {
    if (cpf == null || !cpf.matches("\\d+") || cpf.length() != 11) {
      return false;
    }

    int somaDigitos = 0;

    for (int i = 0; i < 9; i++) {
      int digito = Character.getNumericValue(cpf.charAt(i));
      somaDigitos += digito * (10 - i);
    }

    int dv1 = 11 - (somaDigitos % 11);
    if (dv1 > 9) {
      dv1 = 0;
    }

    if (Character.getNumericValue(cpf.charAt(9)) != dv1) {
      return false;
    }

    somaDigitos = 0;

    for (int i = 0; i < 10; i++) {
      int digito = Character.getNumericValue(cpf.charAt(i));
      somaDigitos += digito * (11 - i);
    }

    int dv2 = 11 - (somaDigitos % 11);
    if (dv2 > 9) {
      dv2 = 0;
    }

    if (Character.getNumericValue(cpf.charAt(10)) != dv2) {
      return false;
    }

    return true;
  }

}
