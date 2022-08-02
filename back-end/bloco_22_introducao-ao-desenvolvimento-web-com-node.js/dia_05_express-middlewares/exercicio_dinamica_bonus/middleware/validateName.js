function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name.length <= 5) {
    return res.status(400).json({ "message": "invalid data" });
  }
  next();
}

module.exports = {
  validateName
}
