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

const getByAuthor = async (author) => {
  const books = await book.findAll({ where: { author } });
  if (!books || books.length === 0) return { code: 404, error: 'Books not found' };
  return { code: 200, data: books };
};

const createBook = async ({ title, author, pageQuantity }) => {
  const newBook = await book.create({ title, author, pageQuantity });
  return { code: 201, data: newBook };
};

const updateBook = async (id, { title, author, pageQuantity }) => {
  const bookById = await book.findByPk(id);
  if (!bookById) return { code: 404, error: 'Book not found' };
  await bookById.update({ title, author, pageQuantity });
  return { code: 200, data: { message: 'Book updated' } };
};

const deleteBook = async (id) => {
  const deletedBook = await book.destroy({ where: { id } });
  if (!deletedBook) return { code: 404, error: 'Book not found' };
  return { code: 200, data: { message: 'Book deleted' } };
};

module.exports = {
  getAllBooks,
  getBookById,
  getByAuthor,
  createBook,
  updateBook,
  deleteBook,
};
