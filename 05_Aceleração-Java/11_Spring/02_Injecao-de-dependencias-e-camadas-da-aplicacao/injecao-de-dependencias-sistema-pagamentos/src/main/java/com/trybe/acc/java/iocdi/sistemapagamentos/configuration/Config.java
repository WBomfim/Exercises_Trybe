package com.trybe.acc.java.iocdi.sistemapagamentos.configuration;

import com.trybe.acc.java.iocdi.sistemapagamentos.service.AuthConfigService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuration Config.
 * 
 */
@Configuration
public class Config {
  @Bean
  public AuthConfigService authConfigService() {
    return new AuthConfigService();
  }
}
