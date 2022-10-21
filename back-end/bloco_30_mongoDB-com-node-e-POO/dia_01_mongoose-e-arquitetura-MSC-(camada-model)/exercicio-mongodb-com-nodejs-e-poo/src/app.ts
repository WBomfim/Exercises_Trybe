import express from 'express';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors';

const app = express();

app.use(express.json());

app.use(handleErrors);

export default app;
