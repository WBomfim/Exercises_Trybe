const express = require('express');
const { validateProductName } = require('./middlewares/validateProductName');

const app = express();
app.use(express.json());

app.post('/sales', validateProductName, (req, res) => {
  return res.status(201).json({ message: 'Rota sale criada' })
});

app.listen(3005, () => console.log('Ouvindo na porta 3005'));
