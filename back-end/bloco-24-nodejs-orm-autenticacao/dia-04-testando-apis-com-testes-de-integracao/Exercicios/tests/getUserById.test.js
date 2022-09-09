const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');

const { User } = require('../src/models');
const { User: userMock }  = require('./mock/models')

chai.use(chaiHttp);

const { expect } = chai;

const fakeUserDB = require('./mock/models/Users.json');

describe('Testes de autenticação em /api/users/:id', () => {
  let loginResponse;

  before(async () => {
    sinon.stub(User, 'findOne')
      .callsFake(userMock.findOne);
  });

  after(async () => {
    User.findOne.restore();
  });

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

  it('Através do token recebido, deve ser possível realizar uma requisição com sucesso em /api/users/:id', async () => {
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
    expect(userResponse.body.message)
      .to.be.equal('Token não encontrado ou informado');
  });
});