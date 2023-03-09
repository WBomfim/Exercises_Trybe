package com.trybe.acc.java.datacenter.service;

import com.trybe.acc.java.datacenter.entity.Aplicacao;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

/**
 * Class AplicacaoService.
 *
 */
public class AplicacaoService implements ServiceInterface<Aplicacao, Long> {
  
  /**
   * Method save.
   *
   */
  public void save(Aplicacao aplicacao) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    em.getTransaction().begin();
    em.persist(aplicacao);
    em.getTransaction().commit();
    em.close();
  }

  /**
   * Method update.
   * 
   */
  public void update(Aplicacao aplicacao) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    em.getTransaction().begin();
    em.merge(aplicacao);
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
    Aplicacao aplicacao = em.find(Aplicacao.class, id);
    em.remove(aplicacao);
    em.getTransaction().commit();
    em.close();
  }

  /**
   * Method list.
   * 
   */
  public List<Aplicacao> list() {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    CriteriaBuilder cb = em.getCriteriaBuilder();
    CriteriaQuery<Aplicacao> cq = cb.createQuery(Aplicacao.class);
    Root<Aplicacao> rootEntry = cq.from(Aplicacao.class);
    CriteriaQuery<Aplicacao> all = cq.select(rootEntry);
    TypedQuery<Aplicacao> allQuery = em.createQuery(all);
    return allQuery.getResultList();
  }

  /**
   * Method findById.
   * 
   */
  public Aplicacao findById(Long id) {
    EntityManager em = ServiceInterface.emf.createEntityManager();
    Aplicacao aplicacao = em.find(Aplicacao.class, id);
    em.close();
    return aplicacao;
  }

}
