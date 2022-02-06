let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 01
/* for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */


// Exercício 02
/* let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}
console.log(soma); */


//Exercício 03
/* let soma = 0;
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}
media = soma / numbers.length;
console.log(media); */


// Exercício 04
/* let soma = 0;
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}
media = soma / numbers.length;

if ( media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
} */


// Exercício 05
/* let maiorValor = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}
console.log(maiorValor); */


// Exercício 06
/* let quantidadeImpar = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    quantidadeImpar += 1;
  }
}
if (quantidadeImpar > 0) {
  console.log("A quantidade de numeros impar é:" + quantidadeImpar);
} else {
  console.log("Nenhum valor ímpar encontrado");
} */


// Exercício 07
/* let maiorValor = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < maiorValor) {
    maiorValor = numbers[index];
  }
}
console.log(maiorValor); */


// Exercício 08
let numeros = []
for (let index = 1; index <= 25; index += 1) {
  numeros.push(index)
}
//console.log(numeros);


// Exercício 09
for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index] / 2);
}
