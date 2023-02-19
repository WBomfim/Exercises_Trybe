const cepService = require('../services/cepServices');

const createAddress = async (req, res, next) => {
  const { cep } = req.body;
  const newAddress = await cepService.createAddress(cep);
  if (newAddress.error) return next(newAddress.error);
  res.status(201).json(newAddress);
};

module.exports = {
  createAddress,
};
