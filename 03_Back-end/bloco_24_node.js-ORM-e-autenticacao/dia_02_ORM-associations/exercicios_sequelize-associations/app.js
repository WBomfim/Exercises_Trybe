const express = require('express');
const bodyParser = require('body-parser');
const patientsRoutes = require('./routes/patients');
const surgeriesRoutes = require('./routes/surgeries');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', patientsRoutes);

app.use('/surgeries', surgeriesRoutes);

module.exports = app;
