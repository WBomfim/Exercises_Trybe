const readline = require('readline');
const fs = require('fs').promises;

function questionExec(question) {
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
}

async function changeWord() {
  try {
    const whichFile = await questionExec('Qual arquivo deseja alterar? ');
    const file = await fs.readFile(whichFile, 'utf8');
    const whichWordChange = await questionExec('Qual palavra deseja substituir? ');
    const whichWordNew = await questionExec(`Qual palavra deseja inserir no lugar de ${whichWordChange}? `);
    const newFile = file.replace(new RegExp(whichWordChange, 'g'), whichWordNew);
    console.log('Arquivo alterado: %s', newFile);
    const whichNewFile = await questionExec('Qual nome deseja dar ao novo arquivo? ');
    await fs.writeFile(whichNewFile, newFile);
  } catch (error) {
    console.log('Erro ao ler arquivo');
  }
}

changeWord();
