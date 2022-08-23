const bookService = require('../services/book');

const getAllBooks = async (_req, res) => {
  const books = await bookService.getAllBooks();
  if (books.error) return res.status(books.code).json({ message: books.error });
  return res.status(books.code).json(books.data);
};

module.exports = {
  getAllBooks,
};
