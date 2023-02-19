import { Pool, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/book';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const query = 'SELECT * FROM books';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Book[];
  }

  public async getById(id: number): Promise<Book> {
    const query = 'SELECT * FROM books WHERE id = ?';
    const result = await this.connection.execute(query, [id]);
    const [rows] = result;
    const [book] = rows as Book[];
    return book;
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const query = 'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(
      query, [title, price, author, isbn]
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }

  public async update(id: number, book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const query = 'UPDATE books SET title = ?, price = ?, author = ?, isbn = ? WHERE id = ?';
    await this.connection.execute(query, [title, price, author, isbn, id]);
    return { id, ...book };
  };

  public async delete(id: number): Promise<void> {
    const query = 'DELETE FROM books WHERE id = ?';
    await this.connection.execute(query, [id]);
  };
}
