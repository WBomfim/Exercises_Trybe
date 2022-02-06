// Retorna o número maior

let numero1 = 500;
let numero2 = 10;
let numero3 = 71;

function numeroMaiorDe3 (numero1, numero2, numero3){
  if (numero1 > numero2 && numero1 > numero3){
    return numero1;
  } else if (numero2 > numero1 && numero2 > numero3) {
    return numero2;
  } else {
    return numero3;
  }
}

console.log(numeroMaiorDe3 (numero1, numero2, numero3));
