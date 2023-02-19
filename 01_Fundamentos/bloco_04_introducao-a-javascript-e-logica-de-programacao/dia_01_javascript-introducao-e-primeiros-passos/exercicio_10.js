//Calcula o lucro 

let precoCusto = 150;
let precoVenda = 400;

function lucro (precoCusto, precoVenda){
  let resultado = 0;
  if (precoCusto < 0 || precoVenda <0){
    return "Os valores não podem ser negativos"
  } else {
    resultado = precoVenda - (precoCusto + ((precoCusto * 20) / 100));
  }
return resultado;
}

console.log(lucro (precoCusto, precoVenda));
