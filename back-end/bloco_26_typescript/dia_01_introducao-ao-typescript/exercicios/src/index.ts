import * as readline from 'readline-sync';

const scriptsExec = [
  {name: 'Comprimento', path: './length'},
  {name: 'Peso', path: './mass'},
];

const scriptsNames = scriptsExec.map((script) => script.name);

const option = readline.keyInSelect(scriptsNames, 'Selecione o tipo de conversão que deseja fazer: ');

const script = scriptsExec[option];

require(script.path);
