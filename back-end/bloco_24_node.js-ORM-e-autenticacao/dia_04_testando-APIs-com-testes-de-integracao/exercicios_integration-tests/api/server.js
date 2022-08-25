const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const auth = require('../middlewares/auth');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', routes.getUsers);
apiRoutes.get('/api/users/:id', auth, routes.getUserById);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
