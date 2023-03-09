package com.trybe.agenda;

import java.util.HashMap;

/**
 * Class AgendaMapa.
 *
 */
public class AgendaMapa {
  HashMap<String, String> agenda = new HashMap<String, String>();

  public void incluirContato(String nome, String telefone) {
    agenda.put(nome, telefone);
  }

  public void excluirContato(String nome) {
    agenda.remove(nome);
  }

  public boolean verificaContato(String nome) {
    return agenda.containsKey(nome);
  }

  public int tamanhoAgenda() {
    return agenda.size();
  }

  public void atualizarTelefone(String nome, String telefone) {
    agenda.replace(nome, telefone);
  }

  public String obterTelefone(String nome) {
    return agenda.get(nome);
  }

}
