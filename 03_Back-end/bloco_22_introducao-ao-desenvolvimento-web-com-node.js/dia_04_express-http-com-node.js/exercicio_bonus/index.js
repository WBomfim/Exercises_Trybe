const express = require('express');
const { authorization } = require('./authorization');
const { generateToken } = require('./generateToken');

const app = express();
app.use(express.json());
app.use(authorization);

app.listen(3005, () => console.log('Ouvindo na porta 3005'));

app.post('/signup', (req, res) => {
  try{
  const {email, password, firstName, phone} = req.body;
  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields' });
  }
  const token = generateToken();
  return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).end();
  }
});
