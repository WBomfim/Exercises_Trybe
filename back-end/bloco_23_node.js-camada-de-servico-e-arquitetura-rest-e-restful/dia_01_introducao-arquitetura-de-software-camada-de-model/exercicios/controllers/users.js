const userService = require('../services/users');
const validations = require('../services/validations');

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(Number(id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  return res.status(200).json(user);
};

const addUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const nameStatus = validations.firstName(firstName);
  const lastNameStatus = validations.lastName(lastName);
  const emailStatus = validations.email(email);
  const passwordStatus = validations.password(password);

  if (nameStatus || lastNameStatus || emailStatus || passwordStatus) {
    return res.status(400).json({ message: nameStatus || lastNameStatus || emailStatus || passwordStatus });
  }

  const newUser = await userService.addUser(req.body);
  return res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const nameStatus = validations.firstName(firstName);
  const lastNameStatus = validations.lastName(lastName);
  const emailStatus = validations.email(email);
  const passwordStatus = validations.password(password);
  const findUser = await userService.getUserById(Number(id));
  if (!findUser) return res.status(404).json({ message: 'User not found' });

  if (nameStatus || lastNameStatus || emailStatus || passwordStatus) {
    return res.status(400).json({ message: nameStatus || lastNameStatus || emailStatus || passwordStatus });
  }

  const updateStatus = await userService.updateUser(Number(id), req.body);
  if (!updateStatus) return res.status(404).json({ message: 'User not found' });
  return res.status(200).json({
    id,
    firstName,
    lastName,
    email,
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
};
