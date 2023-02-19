const { expect } = require("chai")
const { checkNumber } = require("../src/checkNumber")

describe('Testa a função que verifica se o número é neutro, positivo ou negativo', () => {
  describe('Quando o número for 0', () => {
    it('Verifica se a saída é uma string', () => {
      const output = checkNumber(0);
      expect(output).to.be.a('string');
    });

    it('Verifica se a saída é "neutro"', () => {
      const output = checkNumber(0);
      expect(output).to.equal('neutro');
    });
  });

  describe('Quando o número for maior que 0', () => {
    it('Verifica se a saída é uma string', () => {
      const output = checkNumber(5);
      expect(output).to.be.a('string');
    });

    it('Verifica se a saída é "positivo"', () => {
      const output = checkNumber(5);
      expect(output).to.equal('positivo');
    });
  });

  describe('Quando o número for menor que 0', () => {
    it('Verifica se a saída é uma string', () => {
      const output = checkNumber(-5);
      expect(output).to.be.a('string');
    });

    it('Verifica se a saída é "negativo"', () => {
      const output = checkNumber(-5);
      expect(output).to.equal('negativo');
    });
  });

  describe('Quando o parametro passado para a função não é um número', () => {
    it('Verifica se a saída é uma string', () => {
      const output = checkNumber('teste');
      expect(output).to.be.a('string');
    });

    it('Verifica se a função lança o erro "o valor deve ser um número"', () => {
      const output = checkNumber('teste');
      expect(output).to.equal('o valor deve ser um número');
    });
  });
});
