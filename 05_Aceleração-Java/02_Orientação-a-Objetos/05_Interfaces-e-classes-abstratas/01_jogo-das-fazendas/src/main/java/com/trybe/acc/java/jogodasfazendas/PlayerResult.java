package com.trybe.acc.java.jogodasfazendas;

/**
 * Class Playerresult.
 *
 */

public class PlayerResult {
  private String name;
  private Farm[] farms;
  
  public PlayerResult(String name, Farm[] farms) {
    this.name = name;
    this.farms = farms;
  }

  /**
   * Método score.
   * 
   */
  public double score() {
    double areaTotal = 0;
    
    for (Farm farm : this.farms) {
      areaTotal += farm.area();
    }
    
    return areaTotal;
  }
  
  public String toString() {
    return this.name;
  }

}
