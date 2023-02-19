function exercicioPromisse(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
      reject('Informe apenas números');
    }

    const result = (num1 + num2) * num3;

    if (result < 50) {
      reject('Valor muito baixo');
    }

    resolve(result);
  })
}

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

/* function main() {
  const randomNumbers = [...Array(3)].map(() => randomNumber());

  exercicioPromisse(...randomNumbers).then((result) => {
    console.log(result);
  }).catch((error) => { 
    console.log('Erro: %s', error);
  })
} */

async function main() {
  const randomNumbers = [...Array(3)].map(() => randomNumber());

  try{
    const result = await exercicioPromisse(...randomNumbers);
    console.log(result);
  } catch(error){
    console.log('Erro: %s', error);
  }
}

main();
