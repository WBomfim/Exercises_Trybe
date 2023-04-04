package com.trybe.acc.java.testcontainers.persistence;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Classe de domínio para o Produto.
 * 
 */
@Document(collection = "Produto")
public class Produto {

  /**
   * Construtor para o Produto.
   * 
   */
  public Produto(@JsonProperty("id") String id, @JsonProperty("nome") String nome,
      @JsonProperty("preco") Long preco) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  private String id;
  private String nome;
  private Long preco;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public Long getPreco() {
    return preco;
  }

  public void setPreco(Long preco) {
    this.preco = preco;
  }

}
