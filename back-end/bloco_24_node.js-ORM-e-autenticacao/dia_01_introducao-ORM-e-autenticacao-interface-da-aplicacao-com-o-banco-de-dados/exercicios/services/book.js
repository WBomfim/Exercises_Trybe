const { book } = require('../models');

const getAllBooks = async () => {
  const books = await book.findAll();
  if (!books) return { code: 404, error: 'Not found' };
  return { code: 200, data: books };
};

module.exports = {
  getAllBooks,
};
