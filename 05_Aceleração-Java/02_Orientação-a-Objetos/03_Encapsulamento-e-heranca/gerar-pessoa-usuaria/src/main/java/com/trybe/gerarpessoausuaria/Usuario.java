package com.trybe.gerarpessoausuaria;

/**
 * Classe Usuario extende da classe Pessoa.
 *
 */
public class Usuario extends Pessoa {

  public Usuario(String nome, String sobrenome) {
    super(nome, sobrenome);
  }

  /**
   * Método para pegar o nome e sobrenome do usuário.
   *
   */
  public String getUsuario() {
    if (super.nome == null || super.sobrenome == null) {
      return "Usuário inválido";
    }

    if (super.nome == "" || super.sobrenome == "") {
      return "Usuário inválido";
    }

    return super.nome + "." + super.sobrenome;
  }

}
