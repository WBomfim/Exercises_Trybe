const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filme pelo ID', () => {
  beforeEach(sinon.restore);
  const ID_EXAMPLE = 1;

  describe('Quando o filme com o id informado não existe', () => {
    it('Retorna um objeto com as chaves code e message', async () => {
      const returnValue = null;
      sinon.stub(MoviesModel, 'getById').resolves(returnValue);
      const response = await MoviesService.getById(ID_EXAMPLE);
      expect(response).to.be.a('object');
      expect(response).to.have.all.keys('code', 'message');
    });
  });

  describe('Quando o filme com o id informado existe', () => {
    it('Retorna um objeto com as chaves code e data', async () => {
      const returnValue = {
        id: ID_EXAMPLE,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
      sinon.stub(MoviesModel, 'getById').resolves(returnValue);
      const response = await MoviesService.getById(ID_EXAMPLE);
      expect(response).to.be.a('object');
      expect(response).to.have.all.keys('code', 'data');
      expect(response.data).to.have.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  });
});
