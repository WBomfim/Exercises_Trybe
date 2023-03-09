package com.trybe.acc.java.datacenter.entity;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 * Entity Datacenter.
 *
 */
@Entity
public class Datacenter {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String nome;

  @Column
  private String localidade;

  @OneToMany(mappedBy = "datacenter", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Servidor> servidores;

  public Datacenter() {
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

  public String getLocalidade() {
    return localidade;
  }

  public void setLocalidade(String localidade) {
    this.localidade = localidade;
  }

  public Set<Servidor> getServidores() {
    return servidores;
  }

  public void addServidor(Servidor servidor) {
    this.servidores.add(servidor);
  }

}
