// Exercício 01 - Retorna o fatorial
/* let numero = 10;
let resultadoFatorial = numero;
for (let index = numero - 1; index >= 1; index -= 1 ) {
  resultadoFatorial = resultadoFatorial * index;
}
console.log(resultadoFatorial);
 */


// Exercícios 02 - Inverte a palavra
/* let word = "trybe";
let wordInverse = "";
for (let index = word.length - 1; index >= 0; index -= 1) {
  wordInverse = wordInverse + word[index];
}
console.log(wordInverse); */


// Exercício 03 - Retorna qual a maior e qual a menor palavra
/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior = array[0];
let maisLetras = array[0].length;
let palavraMenor = array[0];
let menosLetras = array[0].length;
for (let index = 0; index < array.length; index += 1) {
  if (maisLetras < array[index].length) {
    maisLetras = array[index].length;
    palavraMaior = array[index];
  }
  if (menosLetras > array[index].length) {
    menosLetras = array[index].length;
    palavraMenor = array[index];
  }
}
console.log("A maior palavra é: " + palavraMaior);
console.log("A menor palavra é: " + palavraMenor); */


// Exercício 04 - Resolução_1 - Retorna o maior primo de um número
/* let numero = 50;
let numerosPrimos = [];
for (let index1 = 2; index1 <= numero; index1 += 1) {
  let quantidadeDeDivisores = 0;
  for (let index2 = index1 -1; index2 >= 2; index2 -= 1) {
    if (index1 % index2 === 0) {
      quantidadeDeDivisores += 1;
    }
  }
  if (quantidadeDeDivisores === 0){
    numerosPrimos.push (index1);
  }
}
let arrayPrimos = numerosPrimos;
let maiorNumeroPrimo = arrayPrimos[0];
for (let index = 0; index < numerosPrimos.length; index += 1) {
  if (maiorNumeroPrimo < numerosPrimos[index]) {
    maiorNumeroPrimo = numerosPrimos[index];
  }
}
console.log(maiorNumeroPrimo); */


// Exercício 04 - Resolução_2 - Retorna o maior primo de um número
let numero = 50;
let maiorPrimo = 0;
for (let index1 = 2; index1 <= numero; index1 += 1) {
  let quantidadeDeDivisores = 0;
  for (let index2 = index1 -1; index2 >= 2; index2 -= 1) {
    if (index1 % index2 === 0) {
      quantidadeDeDivisores += 1;
    }
  }
  if (quantidadeDeDivisores === 0){
    maiorPrimo = index1;
  }
}
console.log(maiorPrimo);
