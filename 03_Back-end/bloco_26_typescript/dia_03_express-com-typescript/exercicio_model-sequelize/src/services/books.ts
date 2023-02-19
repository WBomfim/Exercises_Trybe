import bookModel from '../database/models/Book';
import Book from '../interfaces/book';

const getAllBooks = async (): Promise<Book[]> => {
  const books = await bookModel.findAll();
  return books;
};

const getBookById = async (id: number): Promise<Book> => {
  const book = await bookModel.findByPk(id);
  return book as Book;
};

const createBook = async (book: Book): Promise<Book> => {
  const { title, price, author, isbn } = book;
  const newBook = await bookModel.create({ title, price, author, isbn });
  return newBook as Book;
};

const updateBook = async (id: number, book: Book): Promise<Book> => {
  const { title, price, author, isbn } = book;
  await bookModel.update({ title, price, author, isbn }, { where: { id } });
  return { id, ...book };
};

const deleteBook = async (id: number): Promise<void> => {
  await bookModel.destroy({ where: { id } });
}

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
