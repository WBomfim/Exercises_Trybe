const jwt = require('jsonwebtoken');
require('dotenv').config();
const validateUsers = require('../schemas/validateUsers');

const { SECRET_KEY_JWT } = process.env;

const login = (req, res) => {
  const { username, password } = req.body;
  const isNotValidInfo = validateUsers(username, password);
  if (isNotValidInfo) {
    return res.status(isNotValidInfo.code).json({ message: isNotValidInfo.error });
  }
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const jwtPayload = {
    username,
    admin: false,
  };
  const token = jwt.sign(jwtPayload, SECRET_KEY_JWT, jwtConfig);
  return res.status(200).json({ token });
};

module.exports = login;
