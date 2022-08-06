const express = require('express');
const rescue = require('../middlewares/rescue');
const userController = require('../controllers/users');

const userRoutes = express.Router();

userRoutes.post('/', rescue(userController.addUser));

module.exports = userRoutes;
