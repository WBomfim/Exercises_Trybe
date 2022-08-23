const { book } = require('../models');

const getAllBooks = async () => {
  const books = await book.findAll();
  return { code: 200, data: books };
};

module.exports = {
  getAllBooks,
};
