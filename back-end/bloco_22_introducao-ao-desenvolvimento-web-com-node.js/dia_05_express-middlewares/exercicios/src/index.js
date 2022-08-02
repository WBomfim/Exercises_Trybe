const express = require('express');
const { validateProductName } = require('./middlewares/validateProductName');
const { validateInfos } = require('./middlewares/validateInfos');
const { validateInfosSignup } = require('./middlewares/validateInfosSignup');
const { generateToken } = require('../src/helpers/generateToken');

const app = express();
app.use(express.json());

app.post('/sales', validateProductName, validateInfos, (_req, res) => {
  return res.status(201).json({ message: 'Venda cadastrada com sucesso' })
});

app.post('/signup', validateInfosSignup, (_req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

app.listen(3005, () => console.log('Ouvindo na porta 3005'));
