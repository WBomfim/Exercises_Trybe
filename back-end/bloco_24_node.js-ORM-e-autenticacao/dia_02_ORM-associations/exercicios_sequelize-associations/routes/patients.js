const express = require('express');
const patientsController = require('../controllers/patients');

const router = express.Router();

router.get('/plan', patientsController.getPatientsAndPlans);

module.exports = router;
