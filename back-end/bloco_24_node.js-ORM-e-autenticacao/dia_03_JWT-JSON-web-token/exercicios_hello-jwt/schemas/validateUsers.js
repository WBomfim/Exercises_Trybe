const joi = require('joi');

const validateUserName = (username) => {
  const schemaUser = joi.string().min(5).required().messages({
    'string.base': '400|O campo "username" deve ser do tipo "string"',
    'string.required': '400|O campo "username" é obrigatório',
    'string.min': '422|O campo "username" deve ter pelo menos 5 caracteres',
  });

  const { error } = schemaUser.validate(username);

  if (error) {
    const [code, message] = error.details[0].message.split('|');
    return { code, error: message };
  }

  return false;
};

const validatePassword = (password) => {
  const schema = joi.string().min(5).required().messages({
    'string.base': '400|O campo "password" deve ser do tipo "string"',
    'string.required': '400|O campo "password" é obrigatório',
    'string.min': '422|O campo "password" deve ter pelo menos 5 caracteres',
  });

  const { error } = schema.validate(password);

  if (error) {
    const [code, message] = error.message.split('|');
    return { code: Number(code), error: message };
  }

  return false;
};

const validateUsers = (username, password) => {
  const isNotValidUserName = validateUserName(username);
  if (isNotValidUserName) return isNotValidUserName;
  const isNotValidPassword = validatePassword(password);
  if (isNotValidPassword) return isNotValidPassword;
  return false;
};

module.exports = validateUsers;
