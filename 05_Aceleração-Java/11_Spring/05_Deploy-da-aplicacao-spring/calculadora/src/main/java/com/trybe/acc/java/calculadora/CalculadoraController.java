package com.trybe.acc.java.calculadora;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Classe CalculadoraController.
 * 
 */
@RestController
@RequestMapping("/")
public class CalculadoraController {

  /**
   * Método para calcular.
   * 
   */
  @GetMapping("/")
  public ResponseEntity<Valor> calculadora(
      @RequestParam("primeiroValor") int primeiroValor,
      @RequestParam("segundoValor") int segundoValor,
      @RequestParam("operacao") String operacao
  ) {
    switch (operacao) {
      case "ADICAO":
        return ResponseEntity.ok(Calcular.somar(primeiroValor, segundoValor));
      case "SUBTRACAO":
        return ResponseEntity.ok(Calcular.subtrair(primeiroValor, segundoValor));
      case "MULTIPLICACAO":
        return ResponseEntity.ok(Calcular.multiplicar(primeiroValor, segundoValor));
      case "DIVISAO":
        return ResponseEntity.ok(Calcular.dividir(primeiroValor, segundoValor));
      default:
        return ResponseEntity.status(Response.SC_BAD_REQUEST).build();
    }
  }
  
}
