const body = document.querySelector('body');
const backgroundDark = document.querySelector('#background-dark');
const backgroundWhite = document.querySelector('#background-white');
const fontBlack = document.querySelector('#color-dark');
const fontWhite = document.querySelector('#color-white');
const fontBlue = document.querySelector('#color-blue');
const fontSize = document.querySelector('#font-size');
const inputFontSize = document.querySelector('#font-size');
const paragraph = document.getElementsByClassName('text');
const inputLineHeight = document.querySelector('#line-heidth');
const fontSelect = document.getElementById('font');

function saveSettings() {
  const backgroundColor = document.querySelector('body').style.backgroundColor;
  const fontColor = document.querySelector('body').style.color;
  const fontSize = document.querySelector('.text').style.fontSize;
  const lineHeight = document.querySelector('.text').style.lineHeight;
  const fontFamily = document.querySelector('body').style.fontFamily;
  const settings = {
    background: backgroundColor,
    color: fontColor,
    size: fontSize,
    height: lineHeight,
    family: fontFamily
  }
  localStorage.setItem('settings', JSON.stringify(settings));
}

function changeBackgroundDark() {
  body.style.backgroundColor = 'black';
  saveSettings()
}

function changeBackgroundWhite() {
  body.style.backgroundColor = 'white';
  saveSettings()
}

function changeFontBlack() {
  body.style.color = 'black';
  saveSettings()
}

function changeFontWhite() {
  body.style.color = 'white';
  saveSettings()
}

function changeFontBlue() {
  body.style.color = 'blue';
  saveSettings()
}

function chageFontSize(event) {
  if (event.keyCode === 13) {
    for (let index in paragraph) {
      paragraph[index].style.fontSize = inputFontSize.value + 'px';
      saveSettings()
    }
  }
}

function chageLineHeight(event) {
  if (event.keyCode === 13) {
    for (let index in paragraph) {
      paragraph[index].style.lineHeight = inputLineHeight.value + 'px';
      saveSettings()
    }
  }
}

function chageFontStyle(event) {
  if (event.keyCode === 13) {
   body.style.fontFamily = fontSelect.value;
   saveSettings()
  }
}

function loadingSettings() {
  const chargingSettings = JSON.parse(localStorage.getItem('settings'));
  document.querySelector('body').style.backgroundColor = chargingSettings.background;
  document.querySelector('body').style.color = chargingSettings.color;
  const fontSize = document.querySelectorAll('.text');
  for (let index = 0; index < fontSize.length; index += 1) {
    fontSize[index].style.fontSize = chargingSettings.size
  }

  const lineHeight = document.querySelectorAll('.text');
  for (let index = 0; index < fontSize.length; index += 1) {
    lineHeight[index].style.lineHeight = chargingSettings.height
  }
  
  document.querySelector('body').style.fontFamily = chargingSettings.family
}

window.onload = function loadingEvents() {
  loadingSettings()
  backgroundDark.addEventListener('click', changeBackgroundDark);
  backgroundWhite.addEventListener('click', changeBackgroundWhite);
  fontBlack.addEventListener('click', changeFontBlack);
  fontWhite.addEventListener('click', changeFontWhite);
  fontBlue.addEventListener('click', changeFontBlue);
  inputFontSize.addEventListener('keypress', chageFontSize);
  inputLineHeight.addEventListener('keypress', chageLineHeight);
  body.addEventListener('keypress', chageFontStyle)
}
