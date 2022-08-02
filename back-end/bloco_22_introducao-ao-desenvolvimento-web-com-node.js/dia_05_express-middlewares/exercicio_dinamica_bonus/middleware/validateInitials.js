function validateInitials(req, res, next) {
  const { initials } = req.body;
  if (!initials || initials.length > 3) {
    res.status(400).json({ message: "invalid data" });
  }
  next();
}

module.exports = {
  validateInitials
}
