const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');
const { after } = require('mocha');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});

describe('Ao chamar o controller de getById', () => {
  describe('Quando o id informado não é encontrado', async () => {
    const res = {};
    const req = {};

    before(() => {
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      const response = { code: 404, message: { message: 'Movie not found' } };
      sinon.stub(MoviesService, 'getById').resolves(response);
    });

    after(() => MoviesService.getById.restore());

    it('é chamado o status com o código 404 e a mensagem "Movie not found"', async () => {
      await MoviesController.getById(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
      expect(res.json.calledWith({ message: 'Movie not found' })).to.be.equal(true);
    });
  });

  describe('Quando o id informado é encontrado', async () => {
    const res = {};
    const req = {};

    before(() => {
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      const response = { code: 200, data: { id: 1, title: 'Example Movie', directedBy: 'Jane Dow', releaseYear: 1999 } };
      sinon.stub(MoviesService, 'getById').resolves(response);
    });

    after(() => MoviesService.getById.restore());

    it('é chamado o status com o código 200 e retornado os dados do filme encontrado"', async () => {
      await MoviesController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith({ id: 1, title: 'Example Movie', directedBy: 'Jane Dow', releaseYear: 1999 })).to.be.equal(true);
    });
  });
});
