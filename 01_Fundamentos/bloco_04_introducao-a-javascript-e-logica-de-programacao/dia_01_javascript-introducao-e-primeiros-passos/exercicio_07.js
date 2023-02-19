// Converte porcentagem em notas alfabéticas

let nota = 93;

function notaDaPorcentagem (nota){
if (nota < 0 || nota > 100){
  return "Nota invalida";
} else if (nota < 50){
  return "Nota F";
} else if (nota >= 50 && nota < 60){
  return "Nota E";
} else if (nota >= 60 && nota < 70){
  return "Nota D";
} else if (nota >= 70 && nota < 80){
  return "Nota C";
} else if (nota >= 80 && nota < 90){
  return "Nota B";
} else {
  return "Nota A";
}
}

console.log(notaDaPorcentagem (nota));
