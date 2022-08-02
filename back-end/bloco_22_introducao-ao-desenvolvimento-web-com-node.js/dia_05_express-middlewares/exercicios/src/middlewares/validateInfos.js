function validateData(data) {
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  return !dateRegex.test(data); 
}

function validateInfoKeys ({ saleDate, warrantyPeriod }, res) {
  if (!saleDate) {
    return res.status(400).json({ message: "O campo saleDate é obrigatório"});
  }

  if (validateData(saleDate)) {
    return res.status(400).json({ message: "O campo saleDate não é uma data válida"});
  }

  if (!warrantyPeriod) {
    return res.status(400).json({ message: "O campo warrantyPeriod é obrigatório"});
  }

  if (warrantyPeriod < 1 || warrantyPeriod > 3) {
    return res.status(400).json({ message: "O campo warrantyPeriod precisa estar entre 1 e 3"});
  }
}

function validateInfos (req, res, next) {
  const { infos } = req.body;

  if (!infos) {
    return res.status(400).json({ message: "O campo infos é obrigatório"});
  }

  validateInfoKeys(infos, res);

  next();
}

module.exports = {
  validateInfos
}
