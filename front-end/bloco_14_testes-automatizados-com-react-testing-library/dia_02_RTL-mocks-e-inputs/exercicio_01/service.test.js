const service = require('./service');


describe('Teste das funções do arquivo service', () => {
  it('Verifica se a função randomNumber foi chamada, qual seu retorno e quantas vezes foi chamada realizando um mock', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
  
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Verifica se a função randomNumber foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros realizando um mock', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((num1, num2) => num1 / num2);

    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});
