const express = require('express');
const cors = require('cors');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(express.json());

app.get('/ping', controllers.ping);

app.post('/login', controllers.login);

app.get('/users/me', middlewares.auth, controllers.me);

app.use(middlewares.error);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
