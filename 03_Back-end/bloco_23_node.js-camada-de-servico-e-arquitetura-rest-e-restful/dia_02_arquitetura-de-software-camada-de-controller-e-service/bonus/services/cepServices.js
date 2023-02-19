const cepModels = require('../models/cepModels');
const cepValidate = require('../schemas/cepValidate');

const createAddress = async (cep) => {
  const cepIsNotValid = cepValidate(cep);
  if (cepIsNotValid) return cepIsNotValid
  const existingCep = await cepModels.findAddressByCep(cep);
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }
  const createdCep = await cepModels.createAddress(cep);
  if (!createdCep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não existe',
      },
    };
  }
  return createdCep;
};

module.exports = {
  createAddress,
};
