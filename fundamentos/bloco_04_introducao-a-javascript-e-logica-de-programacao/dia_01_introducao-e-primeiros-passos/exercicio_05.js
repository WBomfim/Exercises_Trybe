// Verifica se a soma dos ângulos corresponden a um triângulo

const angulo1 = 45;
const angulo2 = 65;
const angulo3 = 35;

function verificaAngulos (angulo1, angulo2 , angulo3){
  if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    return "Erro - Os angulos não podem ser negativos";
  } else if (angulo1 + angulo2 + angulo3 <= 180){
    return true;
  } else {
    return false;
  }
}

console.log(verificaAngulos (angulo1, angulo2 , angulo3));
