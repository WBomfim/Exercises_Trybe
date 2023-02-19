function validateCountry(req, res, next) {
  const { country } = req.body;
  if (!country || country.length <= 3) {
    res.status(400).json({ message: "invalid data" });
  } 
  next();
}

module.exports = {
  validateCountry
}
