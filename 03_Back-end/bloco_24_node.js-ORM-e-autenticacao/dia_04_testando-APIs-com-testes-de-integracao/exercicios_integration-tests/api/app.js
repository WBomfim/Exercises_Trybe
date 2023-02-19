const express = require('express');
const routes = require('./routes');
const auth = require('../middlewares/auth');

const app = express();

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', auth, routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', routes.getUsers);
apiRoutes.get('/api/users/:id', auth, routes.getUserById);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

module.exports = app;
