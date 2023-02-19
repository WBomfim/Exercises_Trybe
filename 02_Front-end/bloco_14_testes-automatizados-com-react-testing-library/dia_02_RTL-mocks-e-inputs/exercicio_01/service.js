const randomNumber = () => Math.floor(Math.random() * 50);

const changeUpperCase = (string) => string.toUpperCase();

const returnFirstLetter = (string) => string[0]; // string.charAt(0)

const concatStrings = (string1, string2) => string1 + string2; // string.concat(string2)

const fetchDogs = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data.message;
};

module.exports = {
  randomNumber,
  changeUpperCase,
  returnFirstLetter,
  concatStrings,
  fetchDogs,
};
