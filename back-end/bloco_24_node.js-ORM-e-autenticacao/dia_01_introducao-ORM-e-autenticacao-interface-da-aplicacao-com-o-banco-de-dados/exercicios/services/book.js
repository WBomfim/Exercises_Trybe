const { book } = require('../models');

const getAllBooks = async () => {
  const books = await book.findAll();
  if (!books || books.length === 0) return { code: 404, error: 'Not found' };
  return { code: 200, data: books };
};

const getBookById = async (id) => {
  const bookById = await book.findByPk(id);
  if (!bookById) return { code: 404, error: 'Book not found' };
  return { code: 200, data: bookById };
};

module.exports = {
  getAllBooks,
  getBookById,
};
