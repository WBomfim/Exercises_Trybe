const express = require('express');
const rescue = require('../middlewares/rescue');
const userController = require('../controllers/users');

const userRoutes = express.Router();

userRoutes.get('/', rescue(userController.getAllUsers));

userRoutes.get('/:id', rescue(userController.getUserById));

userRoutes.post('/', rescue(userController.addUser));

userRoutes.put('/:id', rescue(userController.updateUser));

module.exports = userRoutes;
