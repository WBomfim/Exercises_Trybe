const joi = require('joi');

const informationsValidate = ({ cep, logradouro, bairro, localidade, uf }) => {
  const requiredNonEmptyString = joi.string().not().empty().required();
  const { error } = joi.object({
    cep: joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate({ cep, logradouro, bairro, localidade, uf });
  if (error) return error;
  return null;
};

module.exports = informationsValidate;
