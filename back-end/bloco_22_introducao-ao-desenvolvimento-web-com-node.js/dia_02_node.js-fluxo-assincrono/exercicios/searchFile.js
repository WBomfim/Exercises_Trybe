const readline = require('readline');
const fs = require('fs').promises;

/* function questionExec(question) {
  const rlinterface = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
  });

  return new Promise((resolve) => {
    rlinterface.question(question, (answer) => {
      rlinterface.close();
      resolve(answer);
    });
  });
} */

function getFile() {
  const rli = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
  });

  return new Promise((resolve) => {
    rli.question('Digite o caminho do arquivo que deseja exibir: ', (answer) => {
      rli.close();
      const fileData = fs.readFile(answer, 'utf-8');
      resolve(fileData);
    });
  });
}

async function main() {
  try {
    const fileData = await getFile();
    console.log(fileData);
  } catch(error) {
    console.log('Arquivo inexistente');
  }
}

main();
