const fs = require('fs/promises');

async function getSimpsons() {
  const fileContent = await fs.readFile('./data/simpsons.json', 'utf-8');
  const data = JSON.parse(fileContent);
  return data;
}

async function setSimpsons(newSimpson) {
  const data = JSON.stringify(newSimpson, null, 2);
  return fs.writeFile('./data/simpsons.json', data, 'utf-8');
}

module.exports = {
  getSimpsons,
  setSimpsons
};
