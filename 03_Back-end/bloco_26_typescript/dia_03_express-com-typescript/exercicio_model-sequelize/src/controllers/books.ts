import { Request, Response } from 'express';
import booksService from '../services/books';

const getAllBooks = async (req: Request, res: Response) => {
  const books = await booksService.getAllBooks();
  res.status(200).send(books);
};

const getBookById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = await booksService.getBookById(id);
  res.status(200).send(book);
}

const createBook = async (req: Request, res: Response) => {
  const book = req.body;
  const newBook = await booksService.createBook(book);
  res.status(201).send(newBook);
}

const updateBook = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = req.body;
  const updatedBook = await booksService.updateBook(id, book);
  res.status(200).send(updatedBook);
}

const deleteBook = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await booksService.deleteBook(id);
  res.status(204).send();
}

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
