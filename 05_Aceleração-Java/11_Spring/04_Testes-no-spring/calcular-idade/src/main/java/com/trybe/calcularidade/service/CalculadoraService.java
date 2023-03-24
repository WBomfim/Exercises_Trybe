package com.trybe.calcularidade.service;

import com.trybe.calcularidade.domain.Idade;
import com.trybe.calcularidade.exception.ArgumentoIlegalException;
import com.trybe.calcularidade.exception.DataFuturaException;
import com.trybe.calcularidade.exception.DataInvalidaException;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import org.springframework.stereotype.Service;

/**
 * Classe CalculadoraService.
 * 
 **/
@Service
public class CalculadoraService {

  /**
   * Calcula a idade a partir da data de nascimento.
   *
   */
  public Idade calcularIdade(String dataNascimento) {

    if (!dataNascimento.replaceAll("-", "").matches("[0-9]+")) {
      throw new ArgumentoIlegalException("Data não é número");
    }

    try {
      LocalDate dataNascimentoFormatada = LocalDate.parse(
          dataNascimento,
          DateTimeFormatter.ofPattern("dd-MM-yyyy")
      );

      LocalDate dataRef = LocalDate.of(2022, 3, 23);

      if (dataNascimentoFormatada.isAfter(dataRef)) {
        throw new DataFuturaException("Data Futura");
      }

      Period periodo = Period.between(dataNascimentoFormatada, dataRef);
      int idade = periodo.getYears();

      return new Idade(idade);
    } catch (DataFuturaException exception) {
      throw exception;
    } catch (Exception exception) {
      throw new DataInvalidaException("Data Inválida");
    }
  }

}
