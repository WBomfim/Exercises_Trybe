package com.trybe.contabancaria;

/**
 * Classe ContaBancaria.
 **/
public class ContaBancaria {
  private Cliente cliente;
  private int saldo;

  public ContaBancaria() {
    this.cliente = new Cliente();
    this.saldo = 0;
  }

  public void setNomeCliente(String nomeCliente) {
    this.cliente.setNome(nomeCliente);
  }

  public String getNomeCliente() {
    return this.cliente.getNome();
  }

  public void setCpfCliente(String cpfCliente) {
    this.cliente.setCpf(cpfCliente);
  }

  public String getCpfCliente() {
    return this.cliente.getCpf();
  }

  public int depositar(int valor) {
    this.saldo += valor;
    return this.saldo;
  }

  public int sacar(int valor) {
    this.saldo -= valor;
    return this.saldo;
  }

  public int verSaldo() {
    return this.saldo;
  }

}
