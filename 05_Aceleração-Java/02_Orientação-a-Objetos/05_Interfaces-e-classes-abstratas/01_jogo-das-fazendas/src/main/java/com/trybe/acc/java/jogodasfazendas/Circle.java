package com.trybe.acc.java.jogodasfazendas;

/**
 * Class Circle.
 *
 */

public class Circle implements Farm {
  static double PI = 3.14;
  private double radius;

  
  public Circle(double radius) {
    this.radius = radius;
  }


  public double area() {
    return PI * Math.pow(radius, 2);
  }

}
