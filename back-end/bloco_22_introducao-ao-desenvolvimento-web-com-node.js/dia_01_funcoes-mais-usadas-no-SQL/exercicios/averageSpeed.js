const readline = require('readline-sync');

const calculateAverageSpeed = () => {
  const distance = readline.questionInt('Qual a distância em Metros? ');
  const time = readline.questionInt('Qual o tempo em segundos? ');
  const averageSpeed = (distance / time).toFixed(2);

  return averageSpeed;
}

const showAverageSpeed = () => {
  const averageSpeed = calculateAverageSpeed();
  console.log(`A velocidade média é de ${averageSpeed} m/s`);
}

showAverageSpeed();
