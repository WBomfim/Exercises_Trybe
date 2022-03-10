const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Exercício 1
const damageDragon = (dragon) => Math.floor(Math.random() * (dragon.strength - 14)) + 15;

// Exercício 2
const damageWarrior = (warrior) => {
  const strength = warrior.strength;
  return Math.floor(Math.random() * ((strength * warrior.weaponDmg) - (strength - 1))) + strength;
}

// Exercício 3
const aMageTurn = (mage) => {
  const intelligence = mage.intelligence;
  let damage = Math.floor(Math.random() * ((intelligence * 2) - (intelligence - 1))) + intelligence;
  let resultMana = 0;
  if (mage.mana < 15) {
    damage = 'Não possui mana suficiente';
  } else {
    resultMana = 15;
  }
  return ({ damage: damage, mana: resultMana});
}

// Exercício 4
const gameActions = {
  turnWarrior: (damageWarrior) => {
    dragon.healthPoints -= damageWarrior(warrior);
    warrior.damage = damageWarrior(warrior);
  },
  turnMage: (aMageTurn) => {
    dragon.healthPoints -= aMageTurn(mage).damage;
    mage.mana -= aMageTurn(mage).mana;
    mage.damage = aMageTurn(mage).damage;
  },
  turnDragon: (damageDragon) => {
    mage.healthPoints -= damageDragon(dragon);
    warrior.healthPoints -= damageDragon(dragon);
    dragon.damage = damageDragon(dragon);
  },
  resultGame: () => battleMembers
};

gameActions.turnWarrior(damageWarrior);
gameActions.turnMage(aMageTurn);
gameActions.turnDragon(damageDragon);
console.log(gameActions.resultGame());
