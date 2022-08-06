const userService = require('../services/users');
const validations = require('../services/validations');

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
}

module.exports = {
  addUser,
};
