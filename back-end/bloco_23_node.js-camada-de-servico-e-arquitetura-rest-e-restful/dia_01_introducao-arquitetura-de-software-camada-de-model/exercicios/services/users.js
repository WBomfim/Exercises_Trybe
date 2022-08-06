const usersModel = require('../models/users');

const addUser = async (user) => {
  const userId = await usersModel.addUser(user);
  const { firstName, lastName, email } = user;
  return {
    id: userId,
    firstName,
    lastName,
    email,
  }
};

module.exports = {
  addUser,
};
