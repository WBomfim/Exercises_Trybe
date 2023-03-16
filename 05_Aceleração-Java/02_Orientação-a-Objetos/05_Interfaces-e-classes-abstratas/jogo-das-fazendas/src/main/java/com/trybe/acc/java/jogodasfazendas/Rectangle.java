package com.trybe.acc.java.jogodasfazendas;

/**
 * Class Rectangle.
 *
 */

public class Rectangle extends Polygon {

  public Rectangle(double base, double height) {
    super(base, height);
  }

  public double area() {
    return this.base * this.height;
  }

}
