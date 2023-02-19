let body = document.querySelector('body');

let h1 = document.createElement('h1');
h1.innerText = 'Exercícios 5.2 - JavaScript DOM';
h1.className = 'title';

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
list.className = 'listNumbers'

sectionRight.appendChild(list);

let numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

let numbersList = document.querySelector('.listNumbers');

for (let index of numbers) {
  let listItem = document.createElement('li');
  listItem.innerText = index;
  listItem.className = 'numbersListItems'
  numbersList.appendChild(listItem);
}

function createClassElementAdd (name, element, elementClass, dad) {
  name = document.createElement(element);
  name.className = elementClass;
  dad.appendChild(name);
}

createClassElementAdd('h31', 'h3', 'description', main);
createClassElementAdd('h32', 'h3', 'description', main);
createClassElementAdd('h33', 'h3', 'description', main);

main.removeChild(sectionLeft);

document.querySelector('.right-content').style.marginRight = 'auto';

document.querySelector('.center-content').parentElement.style.backgroundColor = 'green';

let listItems = document.querySelectorAll('.numbersListItems');

for(let index of listItems) {
  let item = index;
  if (item.innerText.includes('Nove') || item.innerText.includes('Dez')) {
    numbersList.removeChild(item);
  }
}

document.querySelector('section').style.textAlign = 'center';
document.querySelector('.center-content').style.fontSize = '20px';
document.querySelector('.center-content').style.fontWeight = 'bold';
document.querySelector('h1').style.backgroundColor = 'yellow';
document.querySelector('h1').style.fontSize = '70px';
document.querySelector('h1').style.padding = '7%';
document.querySelector('h1').style.marginTop = '0';
document.querySelector('h1').style.marginBottom = '0';
