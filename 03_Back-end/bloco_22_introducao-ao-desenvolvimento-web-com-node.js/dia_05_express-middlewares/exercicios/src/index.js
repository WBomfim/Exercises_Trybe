const express = require('express');
const fs = require('fs/promises');
const { validateProductName } = require('./middlewares/validateProductName');
const { validateInfos } = require('./middlewares/validateInfos');
const { validateInfosSignup } = require('./middlewares/validateInfosSignup');
const { generateToken } = require('../src/helpers/generateToken');
const { validateToken } = require('./middlewares/validateToken');
const { throwErrors } = require('../src/middlewares/throwErrors');

const app = express();
app.use(express.json());

app.post('/sales', validateToken, validateProductName, validateInfos, (_req, res) => {
  return res.status(201).json({ message: 'Venda cadastrada com sucesso' })
});

app.post('/signup', validateInfosSignup, throwErrors(async (_req, res) => {
  const token = generateToken();
  await fs.writeFile('tokens.txt', token);
  return res.status(200).json({ token });
}));

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3005, () => console.log('Ouvindo na porta 3005'));
