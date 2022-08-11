const connection = require('./connection');

const getDistrictId = async ({ bairro, localidade, uf }) => {
  const selectQuery = 'SELECT * FROM bairros WHERE bairro = ?';
  const insertQuery = 'INSERT INTO bairros (bairro, localidade, uf) VALUES (?, ?, ?)';
  const [ district ] = await connection.execute(selectQuery, [bairro]);
  if (district.length === 0) {
    const [ { insertId } ] = await connection.execute(insertQuery, [bairro, localidade, uf]);
    return insertId;
  }
  return district[0].id;
};

module.exports = {
  getDistrictId,
};
