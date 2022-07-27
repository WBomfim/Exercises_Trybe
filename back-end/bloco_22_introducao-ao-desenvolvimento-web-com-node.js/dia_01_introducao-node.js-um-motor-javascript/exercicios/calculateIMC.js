const readline = require('readline-sync');

const IMC_CATEGORIE = {
  'Abaixo do peso': {
    min: 0,
    max: 18.4,
  },
  'Peso normal': {
    min: 18.5,
    max: 24.9,
  },
  'Acima do peso': {
    min: 25,
    max: 29.9,
  },
  'Obesidade grau I': {
    min: 30.0,
    max: 34.9,
  },
  'Obesidade grau II': {
    min: 35,
    max: 39.9,
  },
  'Obesidade graus III e IV': {
    min: 40,
    max: 100 
  },
};

const calcIMC = () => {
  const peso = readline.questionFloat('Qual o seu peso? ');
  const altura = readline.questionFloat('Qual a sua altura? ');
  const imc = (peso / (altura * altura)).toFixed(2);

  return imc;
}

const selectCategorie = (imc) => {
  const categories = Object.keys(IMC_CATEGORIE);
  const selectedCategorie = categories.find((categorie) => {
    const { min, max } = IMC_CATEGORIE[categorie];

    return imc >= min && imc <= max;
  }); 

  return selectedCategorie;
}

const showInformationIMC = () => {
  const imc = calcIMC();
  const categorie = selectCategorie(imc);

  console.log(`Seu IMC é ${imc} e você está na Categoria: ${categorie}`);
}

showInformationIMC();
