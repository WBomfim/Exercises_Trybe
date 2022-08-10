const cepService = require('../services/cepServices');

const findAddressByCep = async (req, res, next) => {
  const { cep } = req.params;
  const address = await cepService.findAddressByCep(cep);
  if (address.error) {
    return next(address.error);
  }
  return res.status(200).json(address);
};

const createAddress = async (req, res, next) => {
  const newAddress = await cepService.createAddress(req.body);
  if (newAddress.error) return next(newAddress.error);
  res.status(201).json(newAddress);
};

module.exports = {
  findAddressByCep,
  createAddress,
};
