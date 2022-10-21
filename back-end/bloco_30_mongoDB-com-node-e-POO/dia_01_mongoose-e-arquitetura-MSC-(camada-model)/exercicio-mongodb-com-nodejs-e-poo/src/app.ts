import express from 'express';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors';
import frameRouter from './routes/frame';

const app = express();

app.use(express.json());

app.use(frameRouter);

app.use(handleErrors);

export default app;
