package com.trybe.acc.java.hibernate;

import com.trybe.acc.java.hibernate.entity.Veiculo;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;


/**
 * Class Application.
 *
 */
public class Application {

  /**
   * Method main.
   * 
   */
  public static void main(String[] args) {
    Veiculo veiculo = new Veiculo();
    veiculo.setAno(2000);
    veiculo.setModelo("Marea");
    veiculo.setQuilometragem("136400");

    EntityManagerFactory emf =
        Persistence.createEntityManagerFactory("com.trybe.acc.java.hibernate.veiculo-hibernate");
    EntityManager em = emf.createEntityManager();

    em.getTransaction().begin();
    em.persist(veiculo);
    em.getTransaction().commit();
    em.close();
  }

}
