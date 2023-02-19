const bookService = require('../services/book');

const getAllBooks = async (req, res) => {
  const { author } = req.query;
  if (author) {
    const books = await bookService.getByAuthor(author);
    if (books.error) return res.status(books.code).json({ message: books.error });
    return res.status(books.code).json(books.data);
  }
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

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await bookService.createBook({ title, author, pageQuantity });
  return res.status(newBook.code).json(newBook.data);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const book = await bookService.updateBook(id, { title, author, pageQuantity });
  if (book.error) return res.status(book.code).json({ message: book.error });
  return res.status(book.code).json(book.data);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await bookService.deleteBook(id);
  if (deletedBook.error) return res.status(deletedBook.code).json({ message: deletedBook.error });
  return res.status(deletedBook.code).json(deletedBook.data);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
