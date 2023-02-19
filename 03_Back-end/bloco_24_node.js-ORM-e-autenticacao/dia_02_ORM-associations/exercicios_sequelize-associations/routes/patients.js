const express = require('express');
const patientsController = require('../controllers/patients');

const router = express.Router();

router.get('/plan', patientsController.getPatientsAndPlans);

router.get('/surgery', patientsController.getPatientsAndSurgeries);

router.get('/surgery/notdoctor', patientsController.getPatientsAndSurgeriesNotDoctor);

router.get('/plan/:id', patientsController.getPatientsByPlanId);

router.post('/', patientsController.addPatient);

module.exports = router;
