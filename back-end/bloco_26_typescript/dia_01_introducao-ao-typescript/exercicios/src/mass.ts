import * as readline from 'readline-sync';

enum units {
  kg = 1000,
  hg = 100,
  dag = 10,
  g = 1,
  dg = 0.1,
  cg = 0.01,
  mg = 0.001,
}

type keyUnits = keyof typeof units;

const convertUnits = (value: number, unitBase: keyUnits, unitConvert: keyUnits): void => {
  const base = units[unitBase];
  const convert = units[unitConvert];
  const result = (value * base) / convert;
  console.log(`${value} ${unitBase} = ${result} ${unitConvert}`);
};

const value: number = readline.questionFloat('insira o valor a ser convertido: ');
const unitsNames = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const valueBase = readline.keyInSelect(unitsNames, 'insira a unidade de medida do valor a ser convertido: ');
const unitBase = unitsNames[valueBase] as keyUnits;
const valueConvert = readline.keyInSelect(unitsNames, 'insira a unidade de medida para conversão: ');
const unitConvert = unitsNames[valueConvert] as keyUnits;

convertUnits(value, unitBase, unitConvert);
