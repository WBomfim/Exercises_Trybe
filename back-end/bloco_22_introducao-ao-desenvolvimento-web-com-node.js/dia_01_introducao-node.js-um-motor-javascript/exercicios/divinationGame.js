const readline = require('readline-sync');

const divinationGame = () => {
  const numberInput = readline.questionInt('Qual o número que você deseja adivinhar entre 0 e 10? ');
  const drawnNumber = Number(Math.floor(Math.random() * 11).toFixed(0));
  
  if (numberInput === drawnNumber) {
    return 'Parabéns, número correto!';
  }

  return `Opa, não foi dessa vez. O número era ${drawnNumber}`;
}

const showResult = () => {
  console.log(divinationGame());
  const playAgain = readline.question('Deseja jogar novamente? (s/n) ');

  if (playAgain === 's') {
    showResult();
  }

  if (playAgain === 'n') {
    console.log('Obrigado por jogar!');
  }
}

showResult();
