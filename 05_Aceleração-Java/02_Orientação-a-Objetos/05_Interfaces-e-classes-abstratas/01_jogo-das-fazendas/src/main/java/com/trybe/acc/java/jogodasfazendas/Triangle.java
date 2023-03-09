package com.trybe.acc.java.jogodasfazendas;

/**
 * Class Triangle.
 *
 */

public class Triangle extends Polygon {

  public Triangle(double base, double height) {
    super(base, height);
  }

  public double area() {
    return (this.base * this.height) / 2;
  }

}
