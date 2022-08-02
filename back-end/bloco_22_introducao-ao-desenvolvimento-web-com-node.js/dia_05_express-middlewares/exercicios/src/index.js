const express = require('express');
const fs = require('fs/promises');
const { validateProductName } = require('./middlewares/validateProductName');
const { validateInfos } = require('./middlewares/validateInfos');
const { validateInfosSignup } = require('./middlewares/validateInfosSignup');
const { generateToken } = require('../src/helpers/generateToken');
const { validateToken } = require('./middlewares/validateToken');

const app = express();
app.use(express.json());

app.post('/sales', validateToken, validateProductName, validateInfos, (_req, res) => {
  return res.status(201).json({ message: 'Venda cadastrada com sucesso' })
});

app.post('/signup', validateInfosSignup, async (_req, res) => {
  const token = generateToken();
  await fs.writeFile('tokens.txt', token);
  return res.status(200).json({ token });
});

app.listen(3005, () => console.log('Ouvindo na porta 3005'));
