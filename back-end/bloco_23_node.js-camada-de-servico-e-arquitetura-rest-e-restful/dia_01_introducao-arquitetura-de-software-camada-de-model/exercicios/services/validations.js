const firstName = (firstName) => {
  if (!firstName) {
    return 'O nome é obrigatório';
  }
  if (firstName === ' ') {
    return 'O nome não pode ser vazio';
  }
  if (typeof firstName !== 'string') {
    return 'O nome deve ser uma palavra';
  }
  return false;
};

const lastName = (lastName) => {
  if (!lastName) {
    return 'O sobrenome é obrigatório';
  }
  if (lastName === ' ') {
    return 'O nome não pode ser vazio';
  }
  if (typeof lastName !== 'string') {
    return 'O sobrenome deve ser uma palavra';
  }
  return false;
};


const password = (password) => {
  if (!password) {
    return 'A senha é obrigatória';
  }
  if (password === ' ') {
    return 'O nome não pode ser vazio';
  }
  if (password.length < 6 || typeof password !== 'string') {
    return 'A senha deve ter no mínimo 6 caracteres entre letres e números';
  }
  return false;
};

const email = (email) => {
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
  if (!email) {
    return 'O email é obrigatório';
  }
  if (email === ' ') {
    return 'O nome não pode ser vazio';
  }
  if (!regexEmail.test(email)) {
    return 'O email deve ser válido';
  }
  return false;
};

module.exports = {
  firstName,
  lastName,
  password,
  email,
};
