const colorPalette = document.querySelector('#color-palette');

function generateNumbersColorsRGB() {
  const num1 = (Math.floor(Math.random() * 256) + 1).toString();
  const num2 = (Math.floor(Math.random() * 256) + 1).toString();
  const num3 = (Math.floor(Math.random() * 256) + 1).toString();
  const colorRGB = ['r', 'g', 'b', '(', num1, ',', num2, ',', num3, ')'];
  return colorRGB.join('');
}

function createColorInPalette(color) {
  const colorExhibition = document.createElement('div');
  colorExhibition.className = 'color';
  colorExhibition.style.backgroundColor = color;
  colorPalette.appendChild(colorExhibition);
}

const buttonCreateColors = document.getElementById('create-color');

function insertColor() {
  const colors = document.querySelectorAll('.color');
  const title = document.getElementById('title');
  if (colors.length <= 35) {
    createColorInPalette(generateNumbersColorsRGB());
    title.style.color = generateNumbersColorsRGB();
  }
}

function selectBlackColorFirst() {
  const colorBlack = document.querySelectorAll('.color')[0];
  colorBlack.className = 'color selected';
}

const pixelBoard = document.getElementById('pixel-board');

function addPixelSquare(size) {
  for (let index1 = 0; index1 < size; index1 += 1) {
    const lineBoard = document.createElement('div');
    lineBoard.className = 'lineBoard';
    pixelBoard.appendChild(lineBoard);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const lineBoardaa = document.querySelectorAll('.lineBoard')[index1];
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lineBoardaa.appendChild(pixel);
    }
  }
}

const inputBoard = document.querySelector('#board-size');
const buttonVQV = document.querySelector('#generate-board');

function boardSizeLimit(value) {
  if (value >= 5 && value <= 50) {
    addPixelSquare(value);
  } else if (value < 5) {
    addPixelSquare(5);
  } else if (value > 50) {
    addPixelSquare(50);
  }
}

function boardSize() {
  const inputValue = inputBoard.value;
  document.querySelector('#pixel-board').innerHTML = '';
  if (inputValue === '') {
    alert('Board inválido!');
    addPixelSquare(5);
  } else {
    boardSizeLimit(inputValue);
  }
}

function changeColors(event) {
  const colors = document.querySelectorAll('.color');
  const eventSelect = event;
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className !== 'selected') {
      colors[index].className = 'color';
      eventSelect.target.className = 'color selected';
    }
  }
}

function colorSelected(event) {
  if (event.target.className === 'color') {
    changeColors(event);
  }
}

function paintPixel(event) {
  const eventPaint = event;
  if (eventPaint.target.className === 'pixel') {
    const colorsClass = document.querySelector('.selected');
    eventPaint.target.style.backgroundColor = colorsClass.style.backgroundColor;
  }
}

const buttonClear = document.getElementById('clear-board');

function clearAllPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

window.onload = function loadingEvents() {
  createColorInPalette('black');
  createColorInPalette(generateNumbersColorsRGB());
  createColorInPalette(generateNumbersColorsRGB());
  createColorInPalette(generateNumbersColorsRGB());
  selectBlackColorFirst();
  addPixelSquare(5);
  buttonCreateColors.addEventListener('click', insertColor);
  buttonVQV.addEventListener('click', boardSize);
  colorPalette.addEventListener('click', colorSelected);
  pixelBoard.addEventListener('click', paintPixel);
  buttonClear.addEventListener('click', clearAllPixels);
};
