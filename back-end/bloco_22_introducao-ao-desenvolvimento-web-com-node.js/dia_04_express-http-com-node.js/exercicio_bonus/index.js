const express = require('express');
const { authorization } = require('./authorization');

const app = express();
app.use(authorization);

app.listen(3005, () => console.log('Ouvindo na porta 3005'));
