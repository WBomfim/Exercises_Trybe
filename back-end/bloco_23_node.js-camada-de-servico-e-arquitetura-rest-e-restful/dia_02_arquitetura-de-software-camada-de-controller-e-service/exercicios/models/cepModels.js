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

module.exports = {
  findAddressByCep,
};
