function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  let classDaysListItems = ''
  for (let index of dezDaysList) {
    const daysListItem = document.createElement('li');
    daysListItem.innerText = index;
    classDaysListItems = 'day';

    if (index === 24 || index === 25 || index === 31) {
      classDaysListItems += ' holiday';
    };

    if (index === 4 || index === 11 || index === 18 || index === 25) {
      classDaysListItems += ' friday';
    };

    daysListItem.className = classDaysListItems;
    daysList.appendChild(daysListItem);
  };
};

createDays();

// Exercício 2
function createButton(buttonName) {
  const button = document.createElement('button');
  button.innerText = buttonName;
  return button;
};

const buttonHoliday = createButton('Feriados');
buttonHoliday.id = 'btn-holiday';
const divButtonsContainer = document.querySelector('.buttons-container');
divButtonsContainer.appendChild(buttonHoliday);

// Exercício 3
function editHolidayDays() {
  const holidayDays = document.querySelectorAll('.holiday');
  
  if (holidayDays[0].style.backgroundColor == '') {
    for (let index in holidayDays) {
      holidayDays[index].style.backgroundColor = 'rgb(0, 150, 8)';
      holidayDays[index].style.color = 'black';
    };
  };

  if (holidayDays[0].style.backgroundColor == 'rgb(0, 150, 8)') {
    for (let index in holidayDays) {
      holidayDays[index].style.backgroundColor = '';
      holidayDays[index].style.color = '#777';
      if (holidayDays[index].innerText === 'SEXTOUU!!!') {
        holidayDays[index].style.color = 'blue';
      };
    };
  };
};

buttonHoliday.addEventListener('click', editHolidayDays);

// Exercício 4
const buttonFriday = createButton('Sexta-feira');
buttonFriday.id = 'btn-friday';
divButtonsContainer.appendChild(buttonFriday);

// Exercício 5
function fridayDays() {
  const fridayDays = document.querySelectorAll('.friday');
  let days = [];
  for (let index = 0; index < fridayDays.length; index += 1) {
    days.push(fridayDays[index].innerHTML);
  }
  return days;
}

const numbersFridayDays = fridayDays();

function editFridayDays() {
  const fridayDays = document.querySelectorAll('.friday');

  if (fridayDays[0].innerText == numbersFridayDays[0]) {
    for (let index in fridayDays) {
      fridayDays[index].innerText = 'SEXTOUU!!!';
      fridayDays[index].style.color = 'blue';
    };
  };

  if (fridayDays[0].innerText === 'SEXTOUU!!!'){
    for (let index in fridayDays) {
      fridayDays[index].innerText = numbersFridayDays[index];
      fridayDays[index].style.color = '#777';
      if (fridayDays[index].style.backgroundColor === 'rgb(0, 150, 8)'){
        fridayDays[index].style.color = 'black';
      };
    };
  };
};

buttonFriday.addEventListener('click', editFridayDays);

// Exercício 6
let days = document.getElementById('days');

function increaseFont(event) {
  event.target.style.fontSize = '30px';
}

function decreaseFont(event) {
  event.target.style.fontSize = '20px';
}

days.addEventListener('mouseover', increaseFont);
days.addEventListener('mouseout', decreaseFont);

// Exercício 7
function createTasks (task) {
  const tasks = document.createElement('span');
  tasks.className = 'tasks';
  tasks.innerText = task;
  document.querySelector('.my-tasks').appendChild(tasks);
}

createTasks('Finalizar Projeto');

// Exercício 8
function addColorTasks(color) {
  const colorTask = document.createElement('div');
  colorTask.className = 'task';
  colorTask.style.backgroundColor = color;
  document.querySelector('.my-tasks').appendChild(colorTask);
}

addColorTasks('green');
