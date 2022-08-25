const patientsService = require('../services/patients');

const getPatientsAndPlans = async (_req, res) => {
  const { code, data, error} = await patientsService.getPatientsAndPlans();
  if (error) return res.status(code).json({ message: error });
  return res.status(code).json(data);
};

module.exports = {
  getPatientsAndPlans
};
