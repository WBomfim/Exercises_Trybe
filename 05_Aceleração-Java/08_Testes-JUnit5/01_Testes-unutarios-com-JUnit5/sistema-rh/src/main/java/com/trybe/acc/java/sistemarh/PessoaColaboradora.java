package com.trybe.acc.java.sistemarh;

/**
 * Class PessoaColaboradora.
 *
 */
public class PessoaColaboradora {
  private double salarioBruto;

  public double calcularSalarioLiquido() {
    return this.salarioBruto * 0.8;
  }

  public double calcularValorBrutoRecebidoAnual(int ano) {
    return (this.salarioBruto * 12) * ano;
  }

  public double calcularValorLiquidoRecebidoAnual(int ano) {
    return (this.calcularSalarioLiquido() * 12) * ano;
  }

  public double calcularValorImpostoAnual(int ano) {
    return this.calcularValorBrutoRecebidoAnual(ano) - this.calcularValorLiquidoRecebidoAnual(ano);
  }

  public double getSalarioBruto() {
    return this.salarioBruto;
  }

  public void setSalarioBruto(double salarioBruto) {
    this.salarioBruto = salarioBruto;
  }

}
