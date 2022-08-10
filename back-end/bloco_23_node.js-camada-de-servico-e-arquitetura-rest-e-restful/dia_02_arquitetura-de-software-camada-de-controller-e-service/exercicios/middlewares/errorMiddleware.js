const errorMiddleware = (_err, _req, res, _next) => res.status(500)
  .json({ message: 'Erro no servidor' });

module.exports = errorMiddleware;
