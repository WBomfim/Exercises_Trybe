require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    expect.assertions(1);
    const response = await getMagicCard('130550');
    expect(response.name).toBe('Ancestor\'s Chosen')
  });

  it('Verifica se getMagiccard é uma função', () => {
    expect.assertions(1);
    expect(typeof getMagicCard).toBe('function');
  })

  it('Verifica se a função fetch foi chamada', () => {
    expect.assertions(1);
    getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
  })

  it('Verifica o endpoint da função fatch', () => {
    expect.assertions(1);
    const url = 'https://api.magicthegathering.io/v1/cards/130550'
    getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('verifica se o retorno da função getMagicCard', async () => {
    expect.assertions(1);
    const response = await getMagicCard('130550');
    expect(response).toEqual(card);
  })

  it('Verifica o erro ao chamar a função com um id desconhecido', async () => {
    expect.assertions(1);
    const response = await getMagicCard('iddesconhecido');
    expect(response).toEqual(new Error('Id is not found!'));
  })
});
