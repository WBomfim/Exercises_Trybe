const randomNumber = () => Math.floor(Math.random() * 50);

const changeUpperCase = (string) => string.toUpperCase();

const returnFirstLetter = (string) => string[0]; // string.charAt(0)

const concatStrings = (string1, string2) => string1 + string2; // string.concat(string2)

module.exports = {
  randomNumber,
  changeUpperCase,
  returnFirstLetter,
  concatStrings
};
