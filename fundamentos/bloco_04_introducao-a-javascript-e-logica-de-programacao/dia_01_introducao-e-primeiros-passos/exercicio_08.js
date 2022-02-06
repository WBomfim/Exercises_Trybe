//Identifica se há números par

let numero1 = 5;
let numero2 = 10;
let numero3 = 9;

function numerosPar (numero1, numero2, numero3){
  if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 ===0){
    return true
  } else {
    return false
  }
}

console.log(numerosPar (numero1, numero2, numero3));
