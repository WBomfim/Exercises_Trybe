// Exercício 1
/* const createUser = (name) => ({ Nome: name, email: `${name.toLowerCase().replaceAll(' ', '')}@trybe.com` })

const newEmployees = (createUserFunction) => {
  const employees = {
    id1: createUserFunction('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createUserFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createUserFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(createUser)); */


// Exercício 2
/* const verifyNumbers = (num1, num2) => num1 === num2;

const bets = (numberBet, verifyBet) => {
  const numberDrawn = Math.floor(Math.random() * 5) + 1;
  return verifyBet(numberBet, numberDrawn) ? 'Parabéns você ganhou' : 'Tente novamente';
}
console.log(bets(2, verifyNumbers)); */

// Exercício 3
const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyTemplates = (array1, array2) => {
  let note = 0;
  for (let index in array1) {
    if (array2[index].toUpperCase() !== 'N.A') {
      if (array1[index].toUpperCase() === array2[index].toUpperCase()) {
        note += 1;
      } else {
        note -= 0.5;
      }
    }
  }
  return note;
}

const noteStudent = (template, templateStudent, verifyNote) => verifyNote(template, templateStudent);

console.log(noteStudent(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyTemplates));
