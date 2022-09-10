import * as readline from 'readline-sync';

enum units {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
}

type keyUnits = keyof typeof units;

const convertUnits = (value: number, unitBase: keyUnits, unitConvert: keyUnits): void => {
  const base = units[unitBase];
  const convert = units[unitConvert];
  const result = (value * base) / convert;
  console.log(`${value} ${unitBase} = ${result} ${unitConvert}`);
};

const value: number = readline.questionFloat('insira o valor a ser convertido: ');
const unitsNames = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const valueBase = readline.keyInSelect(unitsNames, 'insira a unidade de medida do valor a ser convertido: ');
const unitBase = unitsNames[valueBase] as keyUnits;
const valueConvert = readline.keyInSelect(unitsNames, 'insira a unidade de medida para conversão: ');
const unitConvert = unitsNames[valueConvert] as keyUnits;

convertUnits(value, unitBase, unitConvert);
