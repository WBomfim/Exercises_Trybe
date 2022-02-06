// Verifica se o número é negativo ou positivo

const valor = -8;

function verificarValor (valor){
  if (valor === 0){
  return "Zero";
  } else if (valor < 0){
    return "Negative";
  } else {
    return "Positive";
  }
}

console.log(verificarValor (valor));
