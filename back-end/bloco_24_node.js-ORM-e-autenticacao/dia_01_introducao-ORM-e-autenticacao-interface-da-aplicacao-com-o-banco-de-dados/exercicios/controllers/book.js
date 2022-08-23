const bookService = require('../services/book');

const getAllBooks = async (_req, res) => {
  const books = await bookService.getAllBooks();
  if (books.error) return res.status(books.code).json({ message: books.error });
  return res.status(books.code).json(books.data);
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getBookById(id);
  if (book.error) return res.status(book.code).json({ message: book.error });
  return res.status(book.code).json(book.data);
};

module.exports = {
  getAllBooks,
  getBookById,
};
