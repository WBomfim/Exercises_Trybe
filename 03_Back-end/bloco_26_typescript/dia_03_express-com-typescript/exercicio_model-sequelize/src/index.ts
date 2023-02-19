import express from 'express';
import booksRouter from './routes/books';

const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.listen(3000, () => console.log('Server running on port 3000'));
