const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const { writeFile } = require('../src/writeFile');

const NOME_ARQUIVO = 'teste.txt';
const CONTEUDO_ARQUIVO = 'Conteudo do arquivo de teste';

describe('Testa se a função wirtFile executa as operações corretamente', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  
  describe('Passando o nome do arquivo e conteúdo a ser salvo', () => {
    it('Verifica se o conteúdo salvo é uma string', () => {
      const data = writeFile(NOME_ARQUIVO, CONTEUDO_ARQUIVO);
      expect(data).to.be.a('string');
    });

    it('Verifica se o retorno da função é igual a "OK"', () => {
      const data = writeFile(NOME_ARQUIVO, CONTEUDO_ARQUIVO);
      expect(data).to.be.equal('OK');
    });
  });
});
