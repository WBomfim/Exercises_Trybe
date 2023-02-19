// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(strings) {
  let inverseItems = [strings[strings.length - 1], strings[0]];
  return inverseItems.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestNumber(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  for (let index of arrayNumbers) {
    if (higherNumber < index) {
      higherNumber = index;
    }
  }
  return higherNumber;
}
function highestCount(arrayNumbers) {
  let repeatNumber = 0;
  for (let index of arrayNumbers) {
    if (highestNumber(arrayNumbers) === index) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7
function distanceCat1(mouse, cat1) {
  if (mouse < cat1) {
    return cat1 - mouse;
  }
  return mouse - cat1;
}

function distanceCat2(mouse, cat2) {
  if (mouse < cat2) {
    return cat2 - mouse;
  }
  return mouse - cat2;
}

function catAndMouse(mouse, cat1, cat2) {
  if (distanceCat1(mouse, cat1) === distanceCat2(mouse, cat2)) {
    return 'os gatos trombam e o rato foge';
  } if (distanceCat1(mouse, cat1) < distanceCat2(mouse, cat2)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function switchCase(index) {
  if (index % 3 === 0 && index % 5 === 0) {
    return 'fizzBuzz';
  } if (index % 3 === 0) {
    return 'fizz';
  } if (index % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayNumbers) {
  let arrayString = [];
  for (let index of arrayNumbers) {
    arrayString.push(switchCase(index));
  }
  return arrayString;
}

// Desafio 9
function latterConvert(character) {
  let keys = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let key in keys) {
    if (character === key) {
      return keys[key];
    }
  }
}

function numberConvert(character) {
  let keys = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let key in keys) {
    if (character === key) {
      return keys[key];
    }
  }
}

function encode(string) {
  let encodeString = '';
  for (let index of string) {
    if (latterConvert(index) !== undefined) {
      encodeString += latterConvert(index);
    } else {
      encodeString += index;
    }
  }
  return encodeString;
}

function decode(string) {
  let decodeString = '';
  for (let index of string) {
    if (numberConvert(index) !== undefined) {
      decodeString += numberConvert(index);
    } else {
      decodeString += index;
    }
  }
  return decodeString;
}

// Desafio 10
function techList(technology, people) {
  let objects = [];
  if (technology.length === 0) {
    return 'Vazio!';
  }
  for (let index of technology.sort()) {
    objects.push({ tech: index, name: people });
  }
  return objects;
}

