const surgeriesService = require('../services/surgeries');

/* enpoint: /surgeries/Rey%20Dos%20Santos */

const getSurgeriesByDoctor = async (req, res) => {
  const { doctor } = req.params;
  const { code, data, error} = await surgeriesService.getSurgeriesByDoctor(doctor);
  if (error) return res.status(code).json({ message: error });
  return res.status(code).json(data);
};

module.exports = {
  getSurgeriesByDoctor,
};
