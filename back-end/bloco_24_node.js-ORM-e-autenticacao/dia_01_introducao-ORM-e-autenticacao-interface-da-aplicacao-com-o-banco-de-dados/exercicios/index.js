const express = require('express');
const bookController = require('./controllers/book');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/books', bookController.getAllBooks);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
