const buttonSubmit = document.querySelector('#submit');
const checkImage = document.querySelector('#useImages');

function stopDefault(event) {
  event.preventDefault();
}

function noSubmitForms() {
  buttonSubmit.disabled = !checkImage.checked;
}

function validateName() {
  const inputName = document.getElementById('fullName');
  const maxSize = inputName.getAttribute('maxlength');
  const minSize = inputName.getAttribute('minlength');
  const inputValue = inputName.value;
  if (inputValue.length >= minSize && inputValue.length <= maxSize) {
    return true;
  } 
  return false;
}

function validateEmail() {
  const inputEmail = document.getElementById('email');
  const maxSize = inputEmail.getAttribute('maxlength');
  const minSize = inputEmail.getAttribute('minlength');
  const inputValue = inputEmail.value;
  if (inputValue.length >= minSize && inputValue.length <= maxSize) {
    return true;
  }
  return false;
}

function validadeInputData() {
  if (validateName() === true && validateEmail() === true) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  } else {
    alert('Dados Inválidos');
  }
}

window.onload = function loadingEvents() {
  buttonSubmit.addEventListener('click', stopDefault);
  buttonSubmit.addEventListener('click', validadeInputData);
  noSubmitForms()
  checkImage.addEventListener('change', noSubmitForms);
}
