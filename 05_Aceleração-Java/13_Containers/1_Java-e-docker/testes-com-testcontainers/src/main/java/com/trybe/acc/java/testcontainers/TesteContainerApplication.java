package com.trybe.acc.java.testcontainers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Classe responsável por expor os endpoints da API.
 * 
 */
@SpringBootApplication
public class TesteContainerApplication {

  public static void main(String[] args) {
    SpringApplication.run(TesteContainerApplication.class, args);
  }

}
