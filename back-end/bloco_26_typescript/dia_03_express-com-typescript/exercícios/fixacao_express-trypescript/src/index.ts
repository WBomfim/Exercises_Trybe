import express from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(handleErrors);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
