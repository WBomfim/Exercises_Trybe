const connection = require('./connection');
const cepIntegrations = require('../integrations/cepIntegrations');
const districtModels = require('./districtModels');

const findAddressByCep = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', '');
  const query = 'SELECT cep FROM ceps WHERE cep = ?';
  const [ [ result ] ] = await connection.execute(query, [treatedCep])
  if (!result) return null;
  return true;
};

const createAddress = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', '');
  const data = await cepIntegrations.lookupCep(treatedCep);
  if (data.erro) return null;
  const { logradouro, bairro, localidade, uf } = data;
  const districtId = await districtModels.getDistrictId({ bairro, localidade, uf });
  const query = 'INSERT INTO ceps (cep, logradouro, bairro_id) VALUES (?, ?, ?)';
  await connection.execute(query, [treatedCep, logradouro, districtId]);
  return { cep: cepToSearch, logradouro, bairro, localidade, uf };
};

module.exports = {
  findAddressByCep,
  createAddress,
};
