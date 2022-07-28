const fs = require('fs').promises;

const arquivo = './simpsons.json';

async function readFileAndShowInformation() {
  const simpsons = await fs.readFile(arquivo, 'utf-8');
  const simpsonsData = JSON.parse(simpsons);

  if(!simpsonsData) {
    throw new Error(`Erro ao ler arquivo`);
  }
  
  return simpsonsData;
}

async function selectInformation(id) {
  const simpsons = await fs.readFile(arquivo, 'utf-8');
  const simpsonsData = JSON.parse(simpsons);
  const getSimpson = simpsonsData.find(({ id: idSimpson }) => Number(idSimpson) === id);

  if(!getSimpson) {
    throw new Error(`id não encontrado`);
  }

  return`${getSimpson.id} - ${getSimpson.name}`;
}

async function main() {
  try {
    const dataSimpsons = await readFileAndShowInformation();
    dataSimpsons.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });

    const selectedSimpson = await selectInformation(1);
    console.log(selectedSimpson);
  } catch(error) {
    console.log(error);
  }
}

main();
