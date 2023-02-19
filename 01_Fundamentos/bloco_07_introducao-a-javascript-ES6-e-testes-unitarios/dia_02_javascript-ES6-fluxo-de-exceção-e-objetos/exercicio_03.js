const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Adiciona propriedade no objeto
const addTurnoLesson2 = (object, key, value) => object[key] = value;

addTurnoLesson2(lesson2, 'turno', 'noite');

// Lista as chaves de um objeto
const listKeys = (object) => {
  for (let index of Object.keys(object)) {
    console.log(index);
  }
}

listKeys(lesson3);

// Mostra o tamanho de um objeto
const objectSize = (object) => Object.keys(object).length;

objectSize(lesson3);

// Lista os valores de um objeto
const listValue = (object) => {
  for (let index of Object.values(object)) {
    console.log(index);
  }
}

listValue(lesson3);

// Agrupa os objetos de forma que cada um se torne um valor no novo objeto
const allLessons = {};
const addInfoAllLessons = () => {
  allLessons.lesson1 = Object.assign({}, lesson1);
  allLessons.lesson2 = Object.assign({}, lesson2);
  allLessons.lesson3 = Object.assign({}, lesson3);
}

addInfoAllLessons()

console.log(allLessons);
console.table(allLessons);

// Exibe o total de estudantes de todas as aulas
const totalStudents = () => {
  const studentsLesson1 = allLessons.lesson1.numeroEstudantes;
  const studentsLesson2 = allLessons.lesson2.numeroEstudantes;
  const studentsLesson3 = allLessons.lesson3.numeroEstudantes;
  const total = studentsLesson1 + studentsLesson2 + studentsLesson3; 
  return total;
}

console.log(totalStudents());

// Retorna o valor de uma chave de acordo com a sua posição
const valuePosition = (object, position) => Object.values(object)[position];

console.log(valuePosition(lesson1, 0));

// Verificar se a chave e o valor existe
const verifyPair = (object, key, value) => object[key] === value ? true : false;

console.log(verifyPair(lesson3, 'turno', 'noite'));


// Bônus
// conta quantos estudantes assistiram aulas de determinada matéria
function allStudentsBySubject(object, subject) {
  let totalStudents = 0;
  for (let index in object) {
    if (object[`${index}`]['materia'] === subject) {
      totalStudents += object[`${index}`]['numeroEstudantes'];
    }
  }
  return totalStudents;
}

console.log(allStudentsBySubject(allLessons, 'Matemática'));

// Cria um relatório do professor com as materias que ministrou e a quantidade de alunos
function createReport(object, teacher) {
  const report = {
    professor: teacher,
    aulas: [],
    estudantes: 0
  };

  for (let index in object) {
    if (object[`${index}`]['professor'] === teacher) {
      report.aulas.push(object[`${index}`]['materia']);
     report.estudantes += object[`${index}`]['numeroEstudantes'];
    }
  }
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
