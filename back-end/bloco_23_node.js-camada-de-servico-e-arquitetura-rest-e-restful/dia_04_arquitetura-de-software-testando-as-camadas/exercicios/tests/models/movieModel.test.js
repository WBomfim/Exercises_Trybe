const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filmes pelo id', () => {
  beforeEach(sinon.restore);
  const testId = 1;

  describe('Quando o filme com o id informado não existe', () => {
    it('Retorna null', async () => {
      const queryReturn = [];
      sinon.stub(connection, 'execute').resolves(queryReturn);
      const result = await MoviesModel.getById(testId);
      expect(result).to.be.null;
    });
  });

  describe('Quando o filme com o id informado existe', () => {
    it('Retorna um objeto com as informações do filme', async () => {
      const filmeObject = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
      sinon.stub(connection, 'execute').resolves([filmeObject]);
      const result = await MoviesModel.getById(testId);
      expect(result).to.deep.equal(filmeObject);
    });
  });
});
