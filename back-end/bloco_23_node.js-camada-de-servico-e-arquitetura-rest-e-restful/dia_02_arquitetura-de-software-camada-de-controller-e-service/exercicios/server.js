const express = require('express');
const pingRoutes = require('./routes/pingRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use('/ping', pingRoutes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
