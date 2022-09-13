import { Router } from 'express';
import BooksController from '../controllers/books';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);

router.get('/books/:id', booksController.getById);

export default router;
