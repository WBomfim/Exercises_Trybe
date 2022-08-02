const express = require('express');
const { validateProductName } = require('./middlewares/validateProductName');
const { validateInfos } = require('./middlewares/validateInfos');

const app = express();
app.use(express.json());

app.post('/sales', validateProductName, validateInfos, (_req, res) => {
  return res.status(201).json({ message: 'Venda cadastrada com sucesso' })
});

app.listen(3005, () => console.log('Ouvindo na porta 3005'));
