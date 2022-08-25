const patientsService = require('../services/patients');

const getPatientsAndPlans = async (_req, res) => {
  const { code, data, error} = await patientsService.getPatientsAndPlans();
  if (error) return res.status(code).json({ message: error });
  return res.status(code).json(data);
};

const getPatientsAndSurgeries = async (_req, res) => {
  const { code, data, error} = await patientsService.getPatientsAndSurgeries();
  if (error) return res.status(code).json({ message: error });
  return res.status(code).json(data);
};

const getPatientsByPlanId = async (req, res) => {
  const { id } = req.params;
  const { code, data, error} = await patientsService.getPatientsByPlanId(id);
  if (error) return res.status(code).json({ message: error });
  return res.status(code).json(data);
};

module.exports = {
  getPatientsAndPlans,
  getPatientsAndSurgeries,
  getPatientsByPlanId,
};
