const express = require('express');
const cepControllers = require('../controllers/cepControllers');
const rescue = require('../middlewares/rescue');

const routes = express.Router();

routes.post('/', rescue(cepControllers.createAddress));

module.exports = routes;
