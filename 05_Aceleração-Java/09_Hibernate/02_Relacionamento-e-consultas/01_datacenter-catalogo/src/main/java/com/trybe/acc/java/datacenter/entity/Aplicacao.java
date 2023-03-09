package com.trybe.acc.java.datacenter.entity;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

/**
 * Entity Aplicacao.
 *
 */
@Entity
public class Aplicacao {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String nome;

  @Column
  private String descricao;

  @ManyToMany(mappedBy = "aplicacoes")
  private Set<Servidor> servidores;

  public Aplicacao() {
    this.servidores = new HashSet<Servidor>();
  }

  public Long getId() {
    return id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getDescricao() {
    return descricao;
  }

  public void setDescricao(String descricao) {
    this.descricao = descricao;
  }

  public Set<Servidor> getServidores() {
    return servidores;
  }

  public void addServidor(Servidor servidor) {
    this.servidores.add(servidor);
  }

}
