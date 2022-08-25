const { Patients, Plans, Surgeries } = require('../models');

const getPatientsAndPlans = async () => {
  const data = await Patients.findAll({
    include: [{ model: Plans, /* attributes: { exclude: ['plan_id']} */ }],
    /* attributes: { exclude: ['patient_id', 'plan_id'] } */
  });

  if (!data) return { code: 404, error: 'No patients found' };
  return { code: 200, data };
};

const getPatientsAndSurgeries = async () => {
  const data = await Patients.findAll({
    include: [{ model: Surgeries, through: { attributes: [] } }],
  });

  if (!data) return { code: 404, error: 'No patients found' };
  return { code: 200, data };
};

const getPatientsAndSurgeriesNotDoctor = async () => {
  const data = await Patients.findAll({
    include: [{ 
      model: Surgeries, 
      attributes: { exclude: ['doctor'] },
      through: { attributes: [] } 
    }],
  });

  if (!data) return { code: 404, error: 'No patients found' };
  return { code: 200, data };
};

const getPatientsByPlanId = async (planId) => {
  const data = await Plans.findAll({
    where: { plan_id: planId },
    include: [{ model: Patients, attributes: { exclude: ['plan_id']} }],
  });

  if (!data) return { code: 404, error: 'Plan not found' };
  return { code: 200, data };
};

const addPatient = async (fullname, plan_id) => {
  const newPatient = await Patients.create({ fullname, plan_id });
  if (!newPatient) return { code: 404, error: 'Patient not add' };
  return { code: 200, data: newPatient };
};

module.exports = {
  getPatientsAndPlans,
  getPatientsAndSurgeries,
  getPatientsAndSurgeriesNotDoctor,
  getPatientsByPlanId,
  addPatient,
};
