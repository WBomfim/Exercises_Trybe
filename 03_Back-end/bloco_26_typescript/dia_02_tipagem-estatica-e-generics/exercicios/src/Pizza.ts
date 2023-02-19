import { type } from "os";

type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string | Comum | Vegetariana | Doce;
  slices: Slices;
};

const calabresa1: Pizza = {
  flavor: 'Calabresa',
  slices: 8
};
console.log(calabresa1);

const marguerita1: Pizza = {
  flavor: "Marguerita",
  slices: 6
}
console.log(marguerita1);

type Comum = 'calabresa' | 'frango' | 'pepperoni';
type Vegetariana = 'marguerita' | 'palmito' | 'cogumelos';
type Doce = 'nutela' | 'goiabada com queijo' | 'marshmallow';

interface PizzaComum extends Pizza {
  flavor: Comum;
};

interface PizzaVegetariana extends Pizza {
  flavor: Vegetariana;
};

interface PizzaDoce extends Pizza {
  flavor: Doce;
};

const calabresa2: PizzaComum = {
  flavor:"calabresa",
  slices: 8
};
console.log(calabresa2);


const marguerita2: PizzaVegetariana = {
  flavor: "marguerita",
  slices: 6
};
console.log(marguerita2);

const nutela: PizzaDoce = {
  flavor: "nutela",
  slices: 4
};
console.log(nutela);
