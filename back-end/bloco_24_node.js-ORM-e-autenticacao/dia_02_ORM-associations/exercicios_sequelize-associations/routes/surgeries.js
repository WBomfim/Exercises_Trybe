const express = require('express');
const surgeriesController = require('../controllers/surgeries');

const router = express.Router();

router.get('/:doctor', surgeriesController.getSurgeriesByDoctor);

module.exports = router;
