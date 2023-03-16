package com.trybe.acc.java.jogodasfazendas;

/**
 * Class Square.
 *
 */

public class Square implements Farm {
  private double side;

  public Square(double side) {
    this.side = side;
  }

  public double area() {
    return Math.pow(this.side, 2);
  }

}
