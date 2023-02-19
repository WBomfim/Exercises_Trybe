// Teste da função uppercase com callback - exercício 7
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Testando o exercício 7', () => {
  test('Teste da função uppercase', (done) => {
    uppercase('Test', (result) => {
      try {
        expect(result).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});



// Teste da função getPokemonDatails do exercício 8
const { getPokemonDetails } = require("./exercicios.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails(
      (pokemon) => pokemon.name === 'AAAAA',
      (error, result) => {
        expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
        done();
      }
    );
  }); 

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails(
      (pokemon) => pokemon.name === 'Bulbasaur',
      (error, result) => {
        expect(result).toEqual('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
        done();
      }
    );
  }); 
});
