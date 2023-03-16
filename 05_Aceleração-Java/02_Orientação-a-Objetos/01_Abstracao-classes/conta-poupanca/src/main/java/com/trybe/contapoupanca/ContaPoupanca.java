package com.trybe.contapoupanca;

/**
 * Classe ContaPoupanca.
 *
 */
public class ContaPoupanca {
  private double saldo;
  private String titularConta;
  
  public ContaPoupanca(String nome, double valorInicial) {
    this.titularConta = nome;
    this.depositar(valorInicial);
  }
  
  public void depositar(double valor) {
    this.saldo += valor;
  }
  
  public void sacar(double valor) {
    this.saldo -= valor;
  }
  
  public double mostrarSaldo() {
    return this.saldo;
  }
  
  public String mostrarTitularConta() {
    return this.titularConta;
  }

}
