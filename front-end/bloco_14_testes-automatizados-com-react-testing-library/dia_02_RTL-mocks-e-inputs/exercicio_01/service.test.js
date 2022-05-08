const service = require('./service');


describe('Teste das funções do arquivo service', () => {
  it('Verifica se a função randomNumber foi chamada, qual seu retorno e quantas vezes foi chamada realizando um mock', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
  
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Verifica se a função randomNumber foi chamada, qual seu retorno e quantas vezes foi chamada realizando um mock', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((num1, num2) => num1 / num2);

    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Verifica se a função randomNumber foi chamada com um mock implementado 3 parametros, qual seu retorno, quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);

    expect(service.randomNumber(5, 3, 2)).toBe(30);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Verifica se a função randomNumber foi chamada com um mock implementado 1 parametro e retornando o dobro', () => {
    service.randomNumber.mockReset();

    service.randomNumber = jest.fn().mockImplementationOnce((num1) => num1 * 2);
    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});
