let n = 15;

// Bônus 01 - Quadrado de asteriscos
/* for (let index1 = 1; index1 <= n; index1 += 1) {
  let asteriscos = "";
  for (let index2 = 1; index2 <= n; index2 += 1) {
    asteriscos += "*";
  }
  console.log(asteriscos);
} */


// Bônus 02 - Triangulo retangulo à esqueda
/* let asteriscos = "";
for (let index = 1; index <= n; index += 1) {
  asteriscos += "*";
  console.log(asteriscos);
} */


// Bônus 03 - Triangulo retangulo à direita
/* for (let index1 = 1; index1 <= n; index1 += 1) {
  let asteriscos = "";
  for (let index2 = index1; index2 < n; index2 += 1) {
    asteriscos += " ";
  }
  for (let index3 = 1; index3 <= index1; index3 += 1) {
    asteriscos += "*";
  }
  console.log(asteriscos);
} */


// Bônus 04 - triangulo de asteriscos cheio
/* for (let index1 = 1; index1 <= n; index1 += 2) {
  let asteriscos = "";
  for (let index2 = index1 ; index2 < n -1; index2 += 2) {
    asteriscos += " ";
  }
  for (let index3 = 1; index3 <= index1; index3 += 1) {
    asteriscos += "*";
  }
  console.log(asteriscos);
} */


// Bônus 05 - Triangulo de asteriscos vázio
/* for (let index1 = 1; index1 <= n; index1 += 2) {
  let asteriscos = "";
  for (let index2 = index1 ; index2 < n -1; index2 += 2) {
    asteriscos += " ";
  }
  asteriscos += "*";
  if (index1 !== n) {
    for (let index3 = 1; index3 <= index1 -2; index3 += 1) {
      asteriscos += " ";
    }
    if (index1 !== 1) {
    asteriscos += "*";
    }
  } else {
    for (let index3 = 1; index3 <= index1 -1; index3 += 1) {
      asteriscos += "*";
    }
  }
  console.log(asteriscos);
} */


// Bônus 06 - Identifica se o número é primo
let numero = 11;
let resultado = 0;
for (let index1 = 2; index1 < numero; index1 += 1) {
  if (numero % index1 === 0) {
    resultado += 1;
  }
}
if (resultado === 0) {
  console.log("O número é primo");
} else {
  console.log("O número não é primo");
}
