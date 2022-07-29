const { expect } = require('chai');
const { wirtFile } = require('../src/wirtFile');

const NOME_ARQUIVO = 'teste.txt';
const CONTEUDO_ARQUIVO = 'Conteudo do arquivo de teste';

describe('Testa se a função wirtFile executa as operações corretamente', () => {
  describe('Passando o nome do arquivo e conteúdo a ser salvo', () => {
    it('Verifica se o conteúdo salvo é uma string', () => {
      const data = wirtFile(NOME_ARQUIVO, CONTEUDO_ARQUIVO);
      expect(data).to.be.a('string');
    });

    it('Verifica se o retorno da função é igual a "OK"', () => {
      const data = wirtFile(NOME_ARQUIVO, CONTEUDO_ARQUIVO);
      expect(data).to.be.equal('OK');
    });
  });
});
