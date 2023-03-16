package com.trybe.acc.java.datacenter.service;

import com.trybe.acc.java.datacenter.entity.Datacenter;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

/**
 * Class DatacenterService.
 *
 */
public class DatacenterService implements ServiceInterface<Datacenter, Long> {

  /**
   * Method save.
   *
   */
  public void save(Datacenter datacenter) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    em.getTransaction().begin();
    em.persist(datacenter);
    em.getTransaction().commit();
    em.close();
  }

  /**
   * Method update.
   * 
   */
  public void update(Datacenter datacenter) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    em.getTransaction().begin();
    em.merge(datacenter);
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
    Datacenter datacenter = em.find(Datacenter.class, id);
    em.remove(datacenter);
    em.getTransaction().commit();
    em.close();
  }

  /* Comentário para fins didáticos e pesquisa.
     Método criado para testar outra possibilidade de listagem com sintaxe diferente.

    public List<Datacenter> list() {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    em.getTransaction().begin();
    List<Datacenter> datacenters =
        em.createQuery("from Datacenter", Datacenter.class).getResultList();
    em.getTransaction().commit();
    em.close();
    return datacenters;
  } */

  /**
   * Method list.
   * 
   */
  public List<Datacenter> list() {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    CriteriaBuilder cb = em.getCriteriaBuilder();
    CriteriaQuery<Datacenter> cq = cb.createQuery(Datacenter.class);
    Root<Datacenter> rootEntry = cq.from(Datacenter.class);
    CriteriaQuery<Datacenter> all = cq.select(rootEntry);
    TypedQuery<Datacenter> allQuery = em.createQuery(all);
    return allQuery.getResultList();
  }

  /**
   * Method findById.
   * 
   */
  public Datacenter findById(Long id) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    em.getTransaction().begin();
    Datacenter datacenter = em.find(Datacenter.class, id);
    em.getTransaction().commit();
    em.close();
    return datacenter;
  }

}
