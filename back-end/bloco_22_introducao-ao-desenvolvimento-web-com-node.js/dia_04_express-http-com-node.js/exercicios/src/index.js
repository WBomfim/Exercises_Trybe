const express = require('express');

const app = express();
app.use(express.json());

app.listen(3005, () => console.log('Ouvindo na porta 3005'));

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) > 17) {
    return res.status(200).json({ message: `Hello, ${name}!` });
  }
  return res.status(401).json({ message: 'Unauthorized' });
});
