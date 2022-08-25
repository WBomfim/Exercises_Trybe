const { Patients, Plans } = require('../models');

const getPatientsAndPlans = async () => {
  const data = await Patients.findAll({
    include: [{ model: Plans }],
  });

  if (!data) return { code: 404, error: 'No patients found' };
  return { code: 200, data };
};

module.exports = {
  getPatientsAndPlans
};
