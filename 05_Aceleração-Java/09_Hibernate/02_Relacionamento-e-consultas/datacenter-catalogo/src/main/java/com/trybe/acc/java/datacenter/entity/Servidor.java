package com.trybe.acc.java.datacenter.entity;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

/**
 * Entity Servidor.
 *
 */
@Entity
public class Servidor {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String nome;

  @ManyToOne
  @JoinColumn(name = "datacenter_id")
  private Datacenter datacenter;

  @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
  @JoinTable(name = "servidor_aplicacao",
      joinColumns = @JoinColumn(name = "servidor_id"),
      inverseJoinColumns = @JoinColumn(name = "aplicacao_id"))
  private Set<Aplicacao> aplicacoes;

  public Servidor() {
    this.aplicacoes = new HashSet<Aplicacao>();
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

  public Datacenter getDatacenter() {
    return datacenter;
  }

  public void setDatacenter(Datacenter datacenter) {
    this.datacenter = datacenter;
  }

  public Set<Aplicacao> getAplicacoes() {
    return aplicacoes;
  }

  public void addAplicacao(Aplicacao aplicacao) {
    this.aplicacoes.add(aplicacao);
  }
 
}
