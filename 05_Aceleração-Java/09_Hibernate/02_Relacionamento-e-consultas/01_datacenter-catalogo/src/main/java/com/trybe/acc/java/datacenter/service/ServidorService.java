package com.trybe.acc.java.datacenter.service;

import com.trybe.acc.java.datacenter.entity.Servidor;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

/**
 * Class ServidorService.
 *
 */
public class ServidorService implements ServiceInterface<Servidor, Long> {
  
  /**
   * Method save.
   *
   */
  public void save(Servidor servidor) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    em.getTransaction().begin();
    em.persist(servidor);
    em.getTransaction().commit();
    em.close();
  }

  /**
   * Method update.
   * 
   */
  public void update(Servidor servidor) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    em.getTransaction().begin();
    em.merge(servidor);
    em.getTransaction().commit();
    em.close();
  }

  /**
   * Method delete.
   * 
   */
  public void delete(Long id) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    em.getTransaction().begin();
    Servidor servidor = em.find(Servidor.class, id);
    em.remove(servidor);
    em.getTransaction().commit();
    em.close();
  }

  /**
   * Method list.
   * 
   */
  public List<Servidor> list() {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    CriteriaBuilder cb = em.getCriteriaBuilder();
    CriteriaQuery<Servidor> cq = cb.createQuery(Servidor.class);
    Root<Servidor> rootEntry = cq.from(Servidor.class);
    CriteriaQuery<Servidor> all = cq.select(rootEntry);
    TypedQuery<Servidor> allQuery = em.createQuery(all);
    return allQuery.getResultList();
  }

  /**
   * Method findById.
   * 
   */
  public Servidor findById(Long id) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    Servidor servidor = em.find(Servidor.class, id);
    em.close();
    return servidor;
  }

}
