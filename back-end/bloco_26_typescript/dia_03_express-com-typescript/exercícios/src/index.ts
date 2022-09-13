import express from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors';
import booksRouter from './routes/books';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => res.status(StatusCodes.OK).send('Express + TypeScript'));

app.use(booksRouter);

app.use(handleErrors);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
