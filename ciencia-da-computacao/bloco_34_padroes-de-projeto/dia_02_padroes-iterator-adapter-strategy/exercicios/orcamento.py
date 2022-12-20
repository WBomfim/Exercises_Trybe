from abc import ABC, abstractmethod


class StrategyTax(ABC):
    @abstractmethod
    def calculate(self, valor):
        raise NotImplementedError


class ISS(StrategyTax):
    @classmethod
    def calculate(self, valor):
        return valor * 0.1


class ICMS(StrategyTax):
    @classmethod
    def calculate(self, valor):
        return valor * 0.06


class PIS(StrategyTax):
    @classmethod
    def calculate(self, valor):
        return valor * 0.0065


class COFINS(StrategyTax):
    @classmethod
    def calculate(self, valor):
        return valor * 0.03


class Budget:
    def __init__(self, valor):
        self.valor = valor

    def calculate_tax(self, imposto):
        return imposto.calculate(self.valor)


orcamento = Budget(1000)
print(f"ISS: {orcamento.calculate_tax(ISS)}")
print(f"ICMS: {orcamento.calculate_tax(ICMS)}")
print(f"PIS: {orcamento.calculate_tax(PIS)}")
print(f"COFINS: {orcamento.calculate_tax(COFINS)}")
