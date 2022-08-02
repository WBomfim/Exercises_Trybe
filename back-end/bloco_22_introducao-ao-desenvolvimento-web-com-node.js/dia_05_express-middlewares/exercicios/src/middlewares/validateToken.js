const fs = require('fs/promises');

async function validateToken(req, res, next) {
  const token = await fs.readFile('tokens.txt', 'utf8');
  const { authorization } = req.headers;
  if (token !== authorization) {
    return res.status(401).send({ message: 'Token inválido!' });
  }
  
  next();
}

module.exports = {
  validateToken
};
