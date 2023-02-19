const cepModels = require('../models/cepModels');
const cepValidate = require('../schemas/cepValidate');
const informationsValidate = require('../schemas/informationsValidate');
const cepIntegrations = require('../integrations/cepIntegrations');

const findAddressByCep = async (searchedCep) => {
  const cepIsNotValid = cepValidate(searchedCep);
  if (cepIsNotValid) return cepIsNotValid;
  const address = await cepModels.findAddressByCep(searchedCep);
  if (address) return address;
  const addressFromAPI = await cepIntegrations.lookupCep(searchedCep);
  if (!addressFromAPI) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }
  return cepModels.createAddress(addressFromAPI);
};

const createAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const informationsIsNotValid = informationsValidate({ cep, logradouro, bairro, localidade, uf });
  const existingCep = await cepModels.findAddressByCep(cep);
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }
  if (informationsIsNotValid) {
    return {
      error: {
        code: 'invalidData',
        message: informationsIsNotValid.details[0].message,
      },
    };
  } 
  return cepModels.createAddress({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  createAddress,
};
