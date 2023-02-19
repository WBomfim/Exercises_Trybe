const returnPong = (_req, res) => {
  res.status(200).json({ message: 'pong!' });
};

module.exports = { 
  returnPong
};
