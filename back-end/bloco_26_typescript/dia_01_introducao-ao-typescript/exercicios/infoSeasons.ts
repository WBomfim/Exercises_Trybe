import * as readline from "readline-sync";
import Months from "./enumMonths";
import Seasons from "./enumSeasons";

const monthsNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano");

const seasonsSouth = {
    [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
    [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
    [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
    [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
}

const seasonsNorth = {
    [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
    [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
    [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
    [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];

const season = Object.entries(chosenHemisphereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];
  
  if (months.includes(month)) return seasons;
}).filter((season) => season !== undefined);

console.log(`\nMês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
console.log(`Estação: ${season}`);
