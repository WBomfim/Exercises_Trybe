const express = require('express');
const cepRoutes = require('./routes/cepRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use('/cep', cepRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
