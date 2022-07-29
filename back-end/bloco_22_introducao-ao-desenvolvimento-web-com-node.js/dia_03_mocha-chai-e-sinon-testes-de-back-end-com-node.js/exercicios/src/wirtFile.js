const fs = require('fs');

const wirtFile = (nome, conteúdo) => {
  fs.writeFileSync(`./${nome}`, conteúdo);
  return 'OK';
}

module.exports = {
  wirtFile
};
