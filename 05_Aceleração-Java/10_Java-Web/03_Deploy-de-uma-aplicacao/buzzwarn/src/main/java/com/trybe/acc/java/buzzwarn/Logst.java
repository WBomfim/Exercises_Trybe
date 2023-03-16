package com.trybe.acc.java.buzzwarn;

import org.apache.logging.log4j.Logger;

/**
 * Class Logst.
 *
 */
public class Logst {

  private Logger logging;

  public Logst(Logger log) {
    this.logging = log;
  }

  /**
   * CountLogger. Insira sua lógica aqui.
   */
  public void countLogger() {
    for (int number = 1; number <= 30; number++) {
      if (number % 3 == 0 && number % 5 == 0) {
        logging.warn(number);
      } else if (number % 5 == 0) {
        logging.debug(number);
      } else if (number % 3 == 0) {
        logging.trace(number);
      } else {
        logging.info(number);
      }
    }
  }
}
