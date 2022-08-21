const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_KEY_JWT } = process.env;

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY_JWT);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = auth;
