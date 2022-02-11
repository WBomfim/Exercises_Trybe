let body = document.querySelector('body');

let h1 = document.createElement('h1');
h1.innerText = 'Exercícios 5.2 - JavaScript DOM';

body.appendChild(h1);

let main = document.createElement('main');
main.className = 'main-content';

body.appendChild(main);

let section = document.createElement('section');
section.className = 'center-content';

main.appendChild(section);

let p = document.createElement('p');
p.innerText = 'Aprendendo a criar elementos HTML com JavaScript.';

section.appendChild(p);

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';

main.appendChild(sectionLeft);

let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';

main.appendChild(sectionRight);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

section.appendChild(image);

let list = document.createElement('ul');

sectionRight.appendChild(list);

let numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let index of numbers) {
  let listItems = document.createElement('li');
  listItems.innerText = index;
  list.appendChild(listItems);
}

let h31 = document.createElement('h3');
let h32 = document.createElement('h3');
let h33 = document.createElement('h3');

main.appendChild(h31);
main.appendChild(h32);
main.appendChild(h33);

