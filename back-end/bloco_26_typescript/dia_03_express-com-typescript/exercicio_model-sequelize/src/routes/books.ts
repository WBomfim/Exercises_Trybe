import booksController from '../controllers/books';
import { Router } from 'express';

const router = Router();

router.get('/', booksController.getAllBooks);

router.get('/:id', booksController.getBookById);

router.post('/', booksController.createBook);

router.put('/:id', booksController.updateBook);

router.delete('/:id', booksController.deleteBook);

export default router;
