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

async function changeInformation() {
  const simpsons = await fs.readFile(arquivo, 'utf-8');
  const simpsonsData = JSON.parse(simpsons);

  if(!simpsonsData) {
    throw new Error(`Arquivo não encontrado`);
  }

  const filterSimpsons = simpsonsData.filter(({ id }) => Number(id) !== 6 && Number(id) !== 10);
  const newSimpsons = JSON.stringify(filterSimpsons);
  await fs.writeFile(arquivo, newSimpsons, 'utf-8');
}

async function createFamilySimpson() {
  const simpsons = await fs.readFile(arquivo, 'utf-8');
  const simpsonsData = JSON.parse(simpsons);

  if(!simpsonsData) {
    throw new Error(`Arquivo de referência não encontrado`);
  }

  const filterFamilySimpsons = simpsonsData.filter(({ id }) => Number(id) <= 4);
  const newFamilySimpsons = JSON.stringify(filterFamilySimpsons);

  await fs.writeFile('./simpsonFamily.json', newFamilySimpsons, 'utf-8');
}

async function insertInformation() {
  const simpsonsFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const familyData = JSON.parse(simpsonsFamily);

  if(!familyData) {
    throw new Error(`Arquivo não encontrado`);
  }

  familyData.push({
    id: `${familyData.length + 1}`,
    name: 'Nelson Muntz'
  })

  const newFamilySimpsons = JSON.stringify(familyData);
  await fs.writeFile('./simpsonFamily.json', newFamilySimpsons, 'utf-8');
}

async function changeCharacter() {
  const simpsonsFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const familyData = JSON.parse(simpsonsFamily);

  if(!familyData) {
    throw new Error(`Arquivo não encontrado`);
  }

  const changeCharacter = familyData.map((character) => {
    if(Number(character.id) === 5) {
      return {
        id: `${character.id}`,
        name: 'Maggie Simpson'
      }
    }
    return character;
  })

  const newFamilySimpsons = JSON.stringify(changeCharacter);
  await fs.writeFile('./simpsonFamily.json', newFamilySimpsons, 'utf-8');
}

async function main() {
  try {
    const dataSimpsons = await readFileAndShowInformation();
    dataSimpsons.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });

    const selectedSimpson = await selectInformation(1);
    console.log(selectedSimpson);

    await changeInformation();
    await createFamilySimpson();
    await insertInformation();
    await changeCharacter();
  } catch(error) {
    console.log(error);
  }
}

main();
