const cepValidate = (cep) => {
  const CEP_REGEX = /^\d{5}-?\d{3}$/;
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }
  return false;
};

module.exports = cepValidate;
