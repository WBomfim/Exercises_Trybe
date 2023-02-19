// Desafio 11
/* Função .filter consultada no digitalocean.
Link: https://www.digitalocean.com/community/tutorials/js-array-search-methods-pt */
function checkRepeatedNumbers(numbers) {
  for (let index of numbers) {
    if (numbers.filter((num) => num === index).length > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function checkArraySize(numbers) {
  if (checkRepeatedNumbers(numbers) === undefined && (numbers.length < 11 || numbers.length > 11)) {
    return 'Array com tamanho incorreto.';
  }
  return checkRepeatedNumbers(numbers);
}

function checkValidityNumbers(numbers) {
  for (let index of numbers) {
    if (checkArraySize(numbers) === undefined && (index < 0 || index > 9)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return checkArraySize(numbers);
}

function generatePhoneNumber(numbers) {
  if (checkValidityNumbers(numbers) === undefined) {
    let arrayNumbers = numbers;
    let positions = [0, 3, 4, 10];
    let separator = ['(', ')', ' ', '-'];
    for (let index = 0; index < positions.length; index += 1) {
      arrayNumbers.splice(positions[index], 0, separator[index]);
    }
    return arrayNumbers.join('');
  }
  return checkValidityNumbers(numbers);
}

// Desafio 12
function checkSides(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineC + lineA || lineC > lineA + lineB) {
    return false;
  }
}

function checkSlidesValueAbsolute(lineA, lineB, lineC) {
  let bc = Math.abs(lineB - lineC);
  let ca = Math.abs(lineC - lineA);
  let ab = Math.abs(lineA - lineB);
  if (checkSides(lineA, lineB, lineC) === undefined && (lineA < bc || lineB < ca || lineC < ab)) {
    return false;
  }
  return checkSides(lineA, lineB, lineC);
}

function triangleCheck(lineA, lineB, lineC) {
  if (checkSlidesValueAbsolute(lineA, lineB, lineC) === undefined) {
    return true;
  }
  return checkSlidesValueAbsolute(lineA, lineB, lineC);
}

// Desafio 13
/* Função replace consultada no stackoverflow.
Link: https://stackoverflow.com/questions/14478874/how-to-get-integer-values-in-a-string-with-js */
function hydrate(phrase) {
  let extractsNumbers = phrase.replace(/\D/g, '');
  let glassesWater = 0;
  for (let index = 0; index < extractsNumbers.length; index += 1) {
    glassesWater += Number(extractsNumbers[index]);
  }

  let message = [' ', 'c', 'o', 'p', 'o', 's', ' ', 'de', ' ', 'água'];
  if (glassesWater === 1) {
    message = '1 copo de água'.split();
  } else if (glassesWater > 1) {
    message.unshift(glassesWater);
  } else {
    message = 'Você ainda não bebeu'.split();
  }
  return message.join('');
}

