const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./script.js');

describe('Sum test', () => {
  it('sums two values', () => {
    expect(sum(2, 3)).toEqual(5);
  })

  it('sums two values', () => {
    expect(sum(4, 5)).toEqual(9);
  })

  it('sums two values', () => {
    expect(sum(0, 0)).toEqual(0);
  })

  it('Throw error', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })

  it('Throw error', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error ('parameters must be numbers'));
  })
});

describe('Remove item from array', () => {
  it('Remove number 3', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  })

  it('Remove number 3', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('Remove number 3', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 5)).not.toContain(5);
  })
});

describe('Return fizz or buzz according to numbers', () => {
  it('Return fizzbuzz for 15', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('Return fizzbuzz for 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })

  it('Return fizzbuzz for 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })

  it('Return fizzbuzz for 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })

  it('Return fizzbuzz for A', () => {
    expect(myFizzBuzz('A')).toBe(false);
  })
});

describe('Test for encode', () => {
  it('Is function', () => {
    expect(typeof encode).toBe('function');
  })

  it('Convert letter', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  })

  it('Not convert letter', () => {
    expect(encode('b c d f h w')).toBe('b c d f h w');
  })

  it('Returned phrase size', () => {
    expect(encode('Frase').length).toBe(5);
  })
});

describe('Test for decode', () => {
  it('Is function', () => {
    expect(typeof encode).toBe('function');
  })

  it('Convert number', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  })

  it('Not convert number', () => {
    expect(decode('6 7 8 9 0')).toBe('6 7 8 9 0');
  })


  it('Returned phrase size', () => {

    expect(decode('Fr1s2').length).toBe(5);
  })
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    expect(hydrate(' ')).toBe('Você ainda não bebeu');
  });
});
