const readline = require('readline-sync');

const scripts = {
  'Calcular IMC': './calculateIMC.js',
  'Calcular Fatorial': './calculateFatorial.js',
  'Calcular velocidade média': './averageSpeed.js',
  'Jogo de adivinhação': './divinationGame.js'
};

const selectScript = () => {
  const scriptsKeys = Object.keys(scripts);
  const scriptsValues = Object.values(scripts);
  const index = readline.keyInSelect(scriptsKeys, 'Escolha um script:');
  return scriptsValues[index];
}

const executeScript = () => {
  const script = selectScript();
  if (!script) {
    console.log('Até logo!');
    return;
  }
  require(script);
}

executeScript();
