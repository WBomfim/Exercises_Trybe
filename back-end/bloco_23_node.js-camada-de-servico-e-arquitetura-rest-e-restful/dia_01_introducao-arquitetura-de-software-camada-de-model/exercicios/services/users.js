const userModel = require('../models/users');

const getAllUsers = async () => {
  const users = await userModel.getAllUsers();
  return users;
};

const addUser = async (user) => {
  const userId = await userModel.addUser(user);
  const { firstName, lastName, email } = user;
  return {
    id: userId,
    firstName,
    lastName,
    email,
  }
};

module.exports = {
  getAllUsers,
  addUser,
};
