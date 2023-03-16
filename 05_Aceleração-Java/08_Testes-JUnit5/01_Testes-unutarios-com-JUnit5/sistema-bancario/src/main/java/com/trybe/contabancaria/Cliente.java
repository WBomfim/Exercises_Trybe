package com.trybe.contabancaria;

/**
 * Classe Cliente.
 **/
public class Cliente {
  private String nome;
  private String cpf;

  public String getNome() {
    return this.nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getCpf() {
    return this.cpf;
  }

  /**
   * Método para setar o CPF.
   *
   * @param cpf - Uma string com 11 digitos de um CPF
   */
  public void setCpf(String cpf) {
    if (ValidaCpf.validarCpf(cpf)) {
      this.cpf = cpf;
    } else {
      this.cpf = null;
    }
  }

}
