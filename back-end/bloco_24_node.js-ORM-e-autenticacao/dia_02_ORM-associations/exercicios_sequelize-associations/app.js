const express = require('express');
const bodyParser = require('body-parser');
const patientsRoutes = require('./routes/patients');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', patientsRoutes);

module.exports = app;
