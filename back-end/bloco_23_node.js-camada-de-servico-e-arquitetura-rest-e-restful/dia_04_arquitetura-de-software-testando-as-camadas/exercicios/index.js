const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', MovieController.create);

app.get('/movies/:id', MovieController.getById);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
