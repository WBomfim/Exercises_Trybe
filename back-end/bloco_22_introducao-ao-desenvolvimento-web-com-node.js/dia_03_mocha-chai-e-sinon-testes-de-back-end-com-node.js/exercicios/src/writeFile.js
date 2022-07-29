const fs = require('fs');

const writeFile = (nome, conteúdo) => {
  fs.writeFileSync(`./${nome}`, conteúdo);
  return 'OK';
}

module.exports = {
  writeFile
};
