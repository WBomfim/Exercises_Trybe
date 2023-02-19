const userModel = require('../models/users');

const getAllUsers = async () => {
  const users = await userModel.getAllUsers();
  return users;
};

const getUserById = async (id) => {
  const user = await userModel.getUserById(id);
  return user;
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

const updateUser = async (id, user) => {
  const updateStatus = await userModel.updateUser(id, user);
  return updateStatus;
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
};
