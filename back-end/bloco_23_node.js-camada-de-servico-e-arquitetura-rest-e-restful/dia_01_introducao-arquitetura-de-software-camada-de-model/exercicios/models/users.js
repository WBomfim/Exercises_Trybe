const connection = require('./connection');

const formatUser = (user) => {
  const { id, first_name: firstName, last_name: lastName, email } = user;
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

const getAllUsers = async () => {
  const [ users ] = await connection.execute('SELECT * FROM users');
  const formattedUsers = users.map(formatUser);
  return formattedUsers;
};

const getUserById = async (id) => {
  const [ [ user ] ] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
  if (!user) return null;
  const formattedUser = formatUser(user);
  return formattedUser;
};

const addUser = async (user) => {
  const { firstName, lastName, email, password } = user;
  const [ { insertId } ] = await connection.execute(
    'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );
  return insertId;
};

const updateUser = async (id, user) => {
  const { firstName, lastName, email, password } = user;
  await connection.execute(
    'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  );
  return true;
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
};
