const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Port: ${PORT}`));
