const service = require('./service');


describe('Teste das funções do arquivo service', () => {
  test("Verifica se a função randomNumber foi chamada, qual seu retorno e quantas vezes foi chamada realizando um mock", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
  
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});
