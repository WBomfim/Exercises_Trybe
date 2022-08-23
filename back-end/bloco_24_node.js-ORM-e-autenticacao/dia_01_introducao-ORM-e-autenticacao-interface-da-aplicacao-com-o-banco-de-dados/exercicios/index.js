const express = require('express');
const bookController = require('./controllers/book');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/books', bookController.getAllBooks);

app.get('/books/:id', bookController.getBookById);

app.post('/books', bookController.createBook);

app.put('/books/:id', bookController.updateBook);

app.delete('/books/:id', bookController.deleteBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
