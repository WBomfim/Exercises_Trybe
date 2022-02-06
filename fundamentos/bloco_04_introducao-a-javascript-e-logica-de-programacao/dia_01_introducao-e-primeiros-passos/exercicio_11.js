// Calcula valor liquido do salário (Desconto INSS e IR)

let salario = 3000;

function salarioLiquido (salario) {
  let salarioComDescontoInss = 0;
  let liquidoTotal = 0;

  if (salario > 0 && salario <= 1556.94) {
    salarioComDescontoInss = salario - ((salario * 8) / 100);
  } else if (salario >= 1556.95 && salario <= 2594.92) {
    salarioComDescontoInss = salario - ((salario * 9) / 100);
  } else if (salario >= 2594.93 && salario <= 5189.82) {
    salarioComDescontoInss = salario - ((salario * 11) / 100);
  } else if (salario >= 5189.82) {
    salarioComDescontoInss = salario - 570.88;
  } else {
    return "Insira um valor válido"
  }

  if (salarioComDescontoInss <= 1903.98) {
    liquidoTotal = salarioComDescontoInss;
  } else if (salarioComDescontoInss >= 1903.99 && salarioComDescontoInss <= 2826.65) {
    liquidoTotal = salarioComDescontoInss - (((salarioComDescontoInss * 7.5) / 100) - 142.80);
  } else if (salarioComDescontoInss >= 2826.66 && salarioComDescontoInss <= 3751.05) {
    liquidoTotal = salarioComDescontoInss - (((salarioComDescontoInss * 15) / 100) - 354.80);
  } else if (salarioComDescontoInss >= 3751.06 && salarioComDescontoInss <= 4664.68) {
    liquidoTotal = salarioComDescontoInss - (((salarioComDescontoInss * 22.5) / 100) - 636.13);
  } else {
    liquidoTotal = salarioComDescontoInss - (((salarioComDescontoInss * 27.5) / 100) - 869.36);
  }

  return +liquidoTotal.toFixed(2);
}

console.log(salarioLiquido (salario));
