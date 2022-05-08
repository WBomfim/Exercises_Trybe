const service = require('./service');


describe('Testes da função radomNumber', () => {
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

describe('Testes da função changeUpperCase, eturnFirstLetter e concatStrings', () => {
  it('Verifica se as funções changeUpperCase, eturnFirstLetter e concatStrings foram chamadas com os mocks e após os testes doram resetadas', () => {
    jest.spyOn(service, 'changeUpperCase').mockImplementation((string) => string.toLowerCase());
    expect(service.changeUpperCase('TESTE')).toBe('teste');
    expect(service.changeUpperCase).toHaveBeenCalled();
    expect(service.changeUpperCase).toHaveBeenCalledTimes(1);
    
    jest.spyOn(service, 'returnFirstLetter').mockImplementation((string) => string[string.length - 1]);
    expect(service.returnFirstLetter('Teste')).toBe('e');
    expect(service.returnFirstLetter).toHaveBeenCalled();
    expect(service.returnFirstLetter).toHaveBeenCalledTimes(1);
    
    jest.spyOn(service, 'concatStrings').mockImplementation((string1, string2, string3) => string1 + string2 + string3);
    expect(service.concatStrings('Teste', 'Teste', 'Teste')).toBe('TesteTesteTeste');
    expect(service.concatStrings).toHaveBeenCalled();
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
  });

  it('Verifica se as funções changeUpperCase, eturnFirstLetter e concatStrings tiveram suas implementações restauradas', () => {
    service.changeUpperCase.mockRestore();
    expect(service.changeUpperCase('teste')).toBe('TESTE');

    service.returnFirstLetter.mockRestore();
    expect(service.returnFirstLetter('Teste')).toBe('T');

    service.concatStrings.mockRestore();
    expect(service.concatStrings('Teste', 'Testando')).toBe('TesteTestando');
  });
});

describe('Testes da função fetchDogs', () => {
  it('Verifica o retorno da função fetchDogs realizando um mock para a promisse resolvida', async () => {
    service.fetchDogs = jest.fn().mockResolvedValue('request sucess');

    service.fetchDogs()
    expect(service.fetchDogs).toHaveBeenCalled();
    expect(service.fetchDogs).toHaveBeenCalledTimes(1);
    await expect(service.fetchDogs()).resolves.toBe('request sucess');
    expect(service.fetchDogs).toHaveBeenCalledTimes(2);
  });

  it('Verifica o retorno da função fetchDogs realizando um mock para a promisse rejeitada', async () => {
    service.fetchDogs = jest.fn().mockResolvedValue('request failed');

    service.fetchDogs()
    expect(service.fetchDogs).toHaveBeenCalled();
    expect(service.fetchDogs).toHaveBeenCalledTimes(1);
    await expect(service.fetchDogs()).resolves.toBe('request failed');
    expect(service.fetchDogs).toHaveBeenCalledTimes(2);
  });
});
