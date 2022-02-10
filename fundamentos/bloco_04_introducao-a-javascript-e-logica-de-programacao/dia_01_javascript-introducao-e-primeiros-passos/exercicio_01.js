// Calculadora

let numero1 = 5;
let numero2 = 10;
let operacao = "*";

function calculadora (n1,n2,op){
 let resultado = 0;
  switch (op) {
    case "+":
      resultado = n1 + n2;
      break;

    case "-":
      resultado = n1 - n2;
      break;
  
    case "*":
      resultado = n1 * n2;
      break;

    case "/":
      resultado = n1 / n2;
      break;

    case "%":
      resultado = n1 % n2;
      break;

    default:
      break;
  }
  return resultado;
}

console.log(calculadora(numero1, numero2, operacao));
