const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400).send('Dados inválidos');
   }

  return res.status(201).send('Filme criado com sucesso!');
};

const getById = async (req, res) => {
  const { id } = req.params;

  const response = await MoviesService.getById(id);

  if (response.message) {
    return res.status(response.code).json(response.message);
  }

  return res.status(response.code).json(response.data);
};

module.exports = {
  create,
  getById,
};
