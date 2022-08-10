const express = require('express');
const cepControllers = require('../controllers/cepControllers');
const rescue = require('../middlewares/rescue');

const routes = express.Router();

routes.get('/:cep', rescue(cepControllers.findAddressByCep));

module.exports = routes;
