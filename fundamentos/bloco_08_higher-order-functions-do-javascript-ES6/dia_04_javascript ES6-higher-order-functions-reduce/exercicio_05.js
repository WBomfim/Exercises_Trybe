const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

/* function containsA(names) {
  return names.reduce((acc, curr) => 
  acc.toLowerCase() + curr.toLowerCase()).split('').filter((element) => element === 'a').length
} */

function containsA(names) {
  return names.reduce((acc1, curr1) =>
  acc1 + curr1.split('').reduce((acc2, curr2) => curr2 === 'a' || curr2 === 'A' ? acc2 + 1 : acc2, 0), 0);
}

console.log(containsA(names));
