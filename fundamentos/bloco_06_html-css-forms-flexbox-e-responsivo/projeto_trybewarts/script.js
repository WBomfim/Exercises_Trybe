const buttonEntrar = document.getElementById('entrar');
const buttonSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const forms = document.getElementById('evaluation-form');

function login() {
  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');
  if (inputEmail.value.includes('tryber@teste.com') && inputPassword.value.includes('123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function submitForms() {
  buttonSubmit.disabled = !agreement.checked;
}

/*
Fonte pesquisada:
- https://stackoverflow.com/questions/5371089/count-characters-in-textarea  - https://codepen.io/etiennemartin/pen/qpwxZj
*/
counter.innerHTML = 500;

function charCount() {
  const maxLength = textarea.getAttribute('maxlength');
  const currentLenght = textarea.value.length;
  counter.innerHTML = maxLength - currentLenght;
}

function selectFamily() {
  const familyOptions = document.getElementsByName('family');
  for (let index = 0; index < familyOptions.length; index += 1) {
    if (familyOptions[index].checked) {
      return familyOptions[index].value;
    }
  }
  return '';
}

function selectTechs() {
  const techsOptions = document.getElementsByName('techs');
  const techs = [];
  for (let index = 0; index < techsOptions.length; index += 1) {
    if (techsOptions[index].checked) {
      techs.push(techsOptions[index].value);
    }
  }
  return techs.join(', ');
}

function selectNote() {
  const avaliationsOptions = document.getElementsByName('rate');
  for (let index = 0; index < avaliationsOptions.length; index += 1) {
    if (avaliationsOptions[index].checked) {
      return avaliationsOptions[index].value;
    }
  }
  return '';
}

function addInformationForm() {
  const nameInput = document.getElementById('input-name').value;
  const lastnameInput = document.getElementById('input-lastname').value;
  const nameAll = [nameInput, lastnameInput].join(' ');
  const email = document.getElementById('input-email').value;
  const House = document.getElementById('house').value;
  const comment = document.getElementById('textarea').value;
  const formMask = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  const formData = [nameAll, email, House, selectFamily(), selectTechs(), selectNote(), comment];
  forms.innerHTML = '';
  for (let index = 0; index < formMask.length; index += 1) {
    const listInformation = document.createElement('p');
    listInformation.innerText = `${formMask[index]}: ${formData[index]}`;
    forms.appendChild(listInformation);
  }
}

window.onload = function loadingEvents() {
  buttonEntrar.addEventListener('click', login);
  submitForms()
  agreement.addEventListener('change', submitForms);
  textarea.addEventListener('input', charCount);
  buttonSubmit.addEventListener('click', addInformationForm);
};
