// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindromo (palavra) {
  let palavraInversa = palavra.split("").reverse().join("");
  if (palavra.toLowerCase() === palavraInversa.toLowerCase()) {
    return true;
  }
  return false;
}


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let numeros = [2, 3, 6, 7, 10, 1];
function verificaMaiorIndice (numeros) {
  let maiorNumero = numeros[0];
  let indice = 0;
  for (let index in numeros) {
    if (maiorNumero < numeros[index]) {
      maiorNumero = numeros[index];
      indice = index;
    }
  }
  return indice;
}


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let numeros1 = [2, 4, 6, 7, 10, 0, -3];
function verificaMaiorIndice (numeros1) {
  let maiorNumero = numeros1[0];
  let indice = 0;
  for (let index in numeros1) {
    if (maiorNumero > numeros1[index]) {
      maiorNumero = numeros1[index];
      indice = index;
    }
  }
  return indice;
}


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let palavras = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorPalavra(palavras) {
  let nome = "";
  for (let valor of palavras) {
    if (nome.length < valor.length) {
      nome = valor;
    }
  }
  return nome;
}


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let numeros2 =  [2, 3, 2, 5, 8, 2, 3];
function numeroMaisRepetido (numeros2) {
  let numeroRepetido = 0;
  let quantidadeDeRepeticao = 0;
  for (let index1 in numeros2) {
    let repeticoes = 0;
    for(let index2 in numeros2) {
      if (numeros2[index1] === numeros2[index2])
      repeticoes += 1;
    }

    if (quantidadeDeRepeticao < repeticoes) {
      quantidadeDeRepeticao = repeticoes;
      numeroRepetido = numeros2[index1];
    }
  }
  return numeroRepetido
}


// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
let numero = 5
function somaNumerosAnteriores (numero) {
  let soma = 0
  for (let index = 1; index <= numero; index += 1) {
    soma = soma + index
  }
  return soma
}


// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function verificaFinalDaPalavra (word, ending) {
  if (word.length > ending.length) {
    if (word.substring(word.length - ending.length, word.length) === ending) {
      return true
    }
    return false
  } 
  return "Ending maior que Word"
}
