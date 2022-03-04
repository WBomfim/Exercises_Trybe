// Exercícios Parte 1
/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */


// Alterando para que a variavel respeite o escopo
/* function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true); */


// Alterando para arrow function
/* const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);
 */


// Adicionado template literals
/* const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}, ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true); */


// ordenar um array
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((num1, num2) => num1 > num2 ? 1 : -1);

console.log(`Os números ${oddsAndEvens.join()} se encontram ordenados de forma crescente!`);
 */



// Exercícios Parte 2
// Retornal o fatorial de um número
/* function fatorial(number) {
  let result = number
  if (number > 0) {
    for (let index = 1; index < number; index += 1){
      result *= index
    }
  } else if (number === 0) {
    result = 1
  }
  return result
}
console.log(fatorial(5)); */

/* function factorial(number){
  if (number === 0) {
    return 1;
  } else {
    return number * factorial( number - 1 );
  }  
}
console.log(factorial(5)); */

/* const fatorial = (number) => number === 0 ? 1 : number * fatorial(number - 1);
console.log(fatorial(5)); */


// Retorna maior palavra de uma frase
/* const longestWord = (phrase) => {
  let word = phrase.split(' ')[0];
  for (let index of phrase.split(' ')) {
    if (word.length < index.length) {
      word = index;
    }
  }
  return word;
} 
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); */

/* const longestWord = (phrase) => (phrase.split(' ').sort((a, b) => b.length - a.length))[0];

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); */


// Adicionar um contador ao botão da pagina
/* const button = document.getElementById('button');
const h1 = document.querySelector('h1');
let clickCount = 0;
h1.innerText = clickCount;

button.addEventListener('click', function() {
  clickCount += 1;
  h1.innerText = clickCount;
}); */


// Substitui o "X" por uma palavra
const newPhrase = (phrase, word) => {
  let phraseArray = phrase.split('');
  for (let index in phraseArray) {
    if (phraseArray[index].toLowerCase() === 'x') {
      phraseArray[index] = word;
    }
  }
  return phraseArray.join('');
}

// Utiliza a frase da função de cima para formar uma nova impressão
const skills = ['HTML', 'CSS', 'JavaScript', 'DOM', 'GitHub' ];

function mySkills(phrase, skills) {
  const orderedSkills = skills.sort();
  return `${phrase} Minhas cinco principais habilidades são:
  ${orderedSkills[0]}
  ${orderedSkills[1]}
  ${orderedSkills[2]}
  ${orderedSkills[3]}
  ${orderedSkills[4]}`
}

console.log(mySkills(newPhrase('Tryber x aqui!', 'Willian'), skills));
