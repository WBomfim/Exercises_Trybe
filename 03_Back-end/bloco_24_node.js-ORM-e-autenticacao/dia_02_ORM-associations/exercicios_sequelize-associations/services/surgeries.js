const { Surgeries, Patients } = require('../models');

const getSurgeriesByDoctor = async (doctor) => {
  const surgeries = await Surgeries.findAll({
    where: { doctor },
    include: [{ model: Patients, through: { attributes: [] } }],
  });
  
  if (!surgeries) return { code: 404, message: 'Surgeries not found' };
  return { code: 200, data: surgeries };
};

module.exports = {
  getSurgeriesByDoctor,
};
