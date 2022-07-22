CREATE DATABASE IF NOT EXISTS Zoologico ;
USE Zoologico ;

CREATE TABLE Animais (
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  especie VARCHAR(45) NOT NULL,
  sexo VARCHAR(45) NOT NULL,
  idade INT NOT NULL,
  localizacao VARCHAR(45) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE Gerentes (
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE Cuidadores (
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id)
    REFERENCES Gerentes (gerente_id)
) ENGINE = InnoDB;

CREATE TABLE Animal_Cuidador (
  animal_id INT NOT NULL,
  cuidador_id INT NOT NULL,
  CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id)
    REFERENCES Animais (animal_id),
    FOREIGN KEY (cuidador_id)
    REFERENCES Cuidadores (cuidador_id)
) ENGINE = InnoDB;
