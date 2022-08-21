const topSecret = (req, res) => {
  const { admin } = req.user;
  if (admin === false) return res.status(401).json({ message: 'Restricted access' });

  return res.status(200).json({ secretInfo: "Peter Parker é o Homem-Arannha" });
};

module.exports = topSecret;
