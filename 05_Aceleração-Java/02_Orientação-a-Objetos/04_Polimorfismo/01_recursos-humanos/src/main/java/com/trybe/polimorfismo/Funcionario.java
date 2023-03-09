package com.trybe.polimorfismo;

/**
 * class Funcionario.
 *
 */
public abstract class Funcionario {
  private String nome;
  private String cpf;
  private double salarioBruto;

  public abstract double calcularSalarioLiquido();
  
  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public double getSalarioBruto() {
    return salarioBruto;
  }

  public void setSalarioBruto(double salarioBruto) {
    this.salarioBruto = salarioBruto;
  }
}
