const express = require('express');
const { getSimpsons, setSimpsons } = require('../helpers/simpsonsManipulations');

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

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await getSimpsons();
    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const simpsons = await getSimpsons();
    const simpson = simpsons.find(simpson => simpson.id === id);
    if (!simpson) return res.status(404).json({ message: 'simpson not found' });
    return res.status(200).json(simpson);
  } catch (error) {
    return res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = await getSimpsons();
    const simpson = simpsons.some(simpson => simpson.id === id);
    if (simpson) return res.status(409).json({ message: 'id already exists' });
    simpsons.push({ id, name });
    await setSimpsons(simpsons);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
});
