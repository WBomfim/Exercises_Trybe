const errorMiddleware = (err, _req, res, _next) => {
  if (err.code) {
    const statusByErrorCode = {
      notFound: 404,
      alreadyExists: 409,
    };
    const status = statusByErrorCode[err.code] || 500;
    return res.status(status).json(err);
  }

  console.error(err);
  return res.status(500).json({ error: { code: 'internal', message: 'Internal server error' } });
};

module.exports = errorMiddleware;
