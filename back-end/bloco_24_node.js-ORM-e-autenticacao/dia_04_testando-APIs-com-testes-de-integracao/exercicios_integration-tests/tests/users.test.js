const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);

const { expect } = chai;

const server = require('../api/server');

const { User } = require('../models');

const { User: userMock } = require('./mock/models');

const fakeUserDB = require('./mock/models/Users.json');

describe('Testes de autenticação do token em /api/users/:id', () => {
  let loginResponse;

  before(async () => sinon.stub(User, 'findOne').callsFake(userMock.findOne));

  after(async () => User.findOne.restore());

  it('A requisição POST /api/login deve retornar os dados esperados', async () => {
    loginResponse = await chai
      .request(server)
      .post("/api/login")
      .send({
        username: fakeUserDB[0].username,
        password: fakeUserDB[0].password
      });

    expect(loginResponse).to.have.status(200);
    expect(loginResponse.body).to.have.property("token");
  });

  it('Com o token recebido, deve ser possível realizar uma requisição com sucesso em /api/users/:id', async () => {
    const { token } = loginResponse.body;

    const userResponse = await chai
      .request(server)
      .get("/api/users/1")
      .set('authorization', token);

    expect(userResponse).to.have.status(200);
    expect(userResponse.body).to.contain(fakeUserDB[0]);
  });

  it('Sem a utilização do token, a resposta para mesma requisição deve receber status de "Não encontrado"', async () => {
    const userResponse = await chai
      .request(server)
      .get("/api/users/1");

    expect(userResponse).to.have.status(400);
    expect(userResponse.body.message).to.be.equal('Token não encontrado ou informado');
  });
});

describe('Testes da rota /api/users', () => {
  const ENDPOINT = '/api/users';

  before(() => {
    sinon.stub(User, 'create').callsFake(userMock.create);
    sinon.stub(User, 'findAll').callsFake(userMock.findAll);
  });

  after(() => {
    User.create.restore();
    User.findAll.restore();
  });

  describe('Consulta a lista de pessoas usuárias', () => {
    let response;

    before(async () => {
      response = await chai.request(server).get(ENDPOINT);
    });

    it('Deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('Traz uma lista inicial contendo dois registros de pessoas usuárias', () => {
      expect(response.body).to.have.length(2);
    });
  });

  describe('Insere um novo registro', () => {
    let createRequest = {};
    let firstUserList = [];
    let secondUserList = [];
    const newUser = {
      username: 'jane',
      password: 'senha123',
    };

    before(async () => {
      firstUserList = await chai.request(server).get(ENDPOINT).then(({ body }) => body);
      createRequest = await chai.request(server).post(ENDPOINT).send(newUser);
      secondUserList = await chai.request(server).get(ENDPOINT).then(({ body }) => body);
    });

    describe('A primeira requisição GET para a rota', () => {
      it('Deve retornar 2 registros', () => {
        expect(firstUserList).to.have.length(2);
      });
    });

    describe('A requisição POST para a rota ', () => {
      it('Deve retornar o código de status 201', () => {
        expect(createRequest).to.have.status(201);
      });

      it('Deve retornar um objeto no corpo da resposta', () => {
        expect(createRequest.body).to.be.a('object');
      });

      it('O objeto possui a propriedade "message"', () => {
        expect(createRequest.body).to.have.property('message');
      });

      it('A propriedade "message" possui o texto "Novo usuário criado com sucesso"', () => {
        expect(createRequest.body.message).to.be.equal(
          'Novo usuário criado com sucesso',
        );
      });
    });

    describe('A segunda requisição GET para rota após criar um novo usuário', () => {
      it('Deve retornar 3 registros', () => {
        expect(secondUserList).to.have.length(3);
      });

      it('O registro criado deve corresponder ao enviado na requisição POST', () => {
        expect(secondUserList[2]).to.contain(newUser);
      });
    });
  });
});
