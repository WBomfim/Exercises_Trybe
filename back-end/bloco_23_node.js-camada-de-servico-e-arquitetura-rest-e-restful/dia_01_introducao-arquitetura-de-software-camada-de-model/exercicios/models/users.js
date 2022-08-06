const connection = require('./connection');

const addUser = async (user) => {
  const { firstName, lastName, email, password } = user;
  const [ { insertId } ] = await connection.execute(
    'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );
  return insertId;
};

module.exports = {
  addUser,
};
