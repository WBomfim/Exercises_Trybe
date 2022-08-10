const connection = require('./connection');
const formatCep = require('../helpers/formatCep');

const formatAddress = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf
});

const findAddressByCep = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const [ [ result ] ] = await connection.execute(query, [treatedCep])
  if (!result) return null;
  return formatAddress(result);
};

const createAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const treatedCep = cep.replace('-', '');
  const query = `
    INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`;
  await connection.execute(query, [treatedCep, logradouro, bairro, localidade, uf]);
  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  findAddressByCep,
  createAddress,
};
