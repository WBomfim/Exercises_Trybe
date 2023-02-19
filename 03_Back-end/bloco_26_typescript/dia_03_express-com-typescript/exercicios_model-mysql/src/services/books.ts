import connection from '../models/connection';
import BookModel from '../models/book';
import Book from '../interfaces/book';
import { NotFoundError } from 'restify-errors';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public async create(book: Book): Promise<Book> {
    const newBook = await this.model.create(book);
    return newBook;
  }

  public async update(id: number, book: Book): Promise<Book> {
    const bookExists = await this.model.getById(id);
    if (!bookExists) {
      throw new NotFoundError('NotFoundError');
    }
    const updatedBook = await this.model.update(id, book);
    return updatedBook;
  };

  public async delete(id: number): Promise<void> {
    const bookExists = await this.model.getById(id);
    if (!bookExists) {
      throw new NotFoundError('NotFoundError');
    }

    await this.model.delete(id);
  };
}

export default BookService;
