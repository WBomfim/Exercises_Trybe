from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(self, msg):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(self, msg):
        print(f"Logando em arquivo: {msg}")


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(self, msg):
        print(f"Logando em tela: {msg}")


class Log():
    def __init__(self, manipuladores):
        self.manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.manipuladores.add(manipulador)

    def info(self, msg):
        self.__log("INFO", msg)

    def alert(self, msg):
        self.__log("ALERT", msg)

    def error(self, msg):
        self.__log("ERROR", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)

    def __log(self, tipo, msg):
        for manipulador in self.manipuladores:
            manipulador.log(self.__formatar(tipo, msg))

    def __formatar(self, tipo, msg):
        date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"{tipo} - {date} - {msg}"
