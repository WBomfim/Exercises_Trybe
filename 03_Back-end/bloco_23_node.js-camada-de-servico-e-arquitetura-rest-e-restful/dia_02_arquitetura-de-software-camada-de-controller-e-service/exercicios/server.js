const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const pingRoutes = require('./routes/pingRoutes');
const cepRoutes = require('./routes/cepRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use('/ping', pingRoutes);

app.use('/cep', cepRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
