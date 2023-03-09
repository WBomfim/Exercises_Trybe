package com.trybe.acc.java.sistemarh;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class PessoaColaboradoraTest {
  PessoaColaboradora pessoaColaboradora;

  public PessoaColaboradoraTest() {
    pessoaColaboradora = new PessoaColaboradora();
  }

  @BeforeEach
  private void BeforeEach() {
    pessoaColaboradora.setSalarioBruto(3000);
  }

  @Test
  @DisplayName("Verifica o getter do salário bruto")
  public void testeGetterSalarioBruto() {
    assertEquals(3000, pessoaColaboradora.getSalarioBruto());
  }

  @Test
  @DisplayName("Verifica o cálculo do valor do salário com 20% de desconto do imposto")
  public void testeCalcularSalarioLiquido() {
    assertEquals(2400, pessoaColaboradora.calcularSalarioLiquido());
  }

  @Test
  @DisplayName("Verifica o cálculo do valor bruto recebido anualmente")
  public void testeCalcularValorBrutoRecebidoAnual() {
    assertEquals(180000, pessoaColaboradora.calcularValorBrutoRecebidoAnual(5));
  }

  @Test
  @DisplayName("Verifica o cálculo do valor líquido recebido anualmente")
  public void testeCalcularValorLiquidoRecebidoAnual() {
    assertEquals(144000, pessoaColaboradora.calcularValorLiquidoRecebidoAnual(5));
  }

  @Test
  @DisplayName("Verifica o cálculo do valor do imposto anual")
  public void testeCalcularValorImpostoAnual() {
    assertEquals(36000, pessoaColaboradora.calcularValorImpostoAnual(5));
  }

}
