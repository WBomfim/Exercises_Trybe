const readline = require('readline-sync');

const calculateFatorial = () => {
  const number = readline.questionFloat('Digite um número inteiro maior que 0: ');

  if (number > 0 && number % 1 === 0) {
    let fatorial = 1;
    for (let index = 1; index <= number; index += 1) {
      fatorial *= index;
    }
    return `O fatorial de ${number} é ${fatorial}`;
  }

  return 'Número inválido';
}

const showResult = () => {
  const result = calculateFatorial();

  if (result === 'Número inválido') {
    console.log(result);
    showResult();
  }

  if (result !== 'Número inválido') {
    console.log(result);
  }
}

showResult();
