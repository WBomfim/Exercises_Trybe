const fs = require('fs').promises;

const arquivo = './simpsons.json';

function showInformation(array) {
  array.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
}

async function readFile() {
  try{
    const simpsons = await fs.readFile(arquivo, 'utf-8');
    const simpsonsData = JSON.parse(simpsons);
    showInformation(simpsonsData);
  } catch(error) {
    console.error(`Erro ao ler arquivo ${arquivo}: ${error.message}`);
  }
}

function main() {
  readFile();
}

main();