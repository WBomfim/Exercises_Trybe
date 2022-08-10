const cepModels = require('../models/cepModels');
const cepValidate = require('../schemas/cepValidate');

const findAddressByCep = async (searchedCep) => {
  const cepIsValid = cepValidate(searchedCep);
  if (!cepIsValid) return cepIsValid;
  const address = await cepModels.findAddressByCep(searchedCep);
  if (!address) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }
  return address;
};

module.exports = {
  findAddressByCep,
};
