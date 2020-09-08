import { Injectable } from '@angular/core';
import { Author } from './author';
import { Book } from './book';
import { Observable, of } from 'rxjs';

interface ArrayWithId {
  id: number;
}
enum ObjectType {
  author,
  book,
  genre
}
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getAuthors(): Observable<Author[]> {
    return of(this.getAllAuthors());
  }
  private getAllAuthors(): Author[] {
    const authorsString = localStorage.getItem('authors');
    const booksString = localStorage.getItem('books');
    const authorOfBookString = localStorage.getItem('author-of-book');

    const authors = JSON.parse(authorsString);
    const books = JSON.parse(booksString);
    const authorOfBooks = JSON.parse(authorOfBookString);
    for (const author of authors) {
      author.books = [];
      for (const authorOfBook of authorOfBooks) {
        if (author.id === authorOfBook.authorId) {
          for (const book of books) {
            if (book.id === authorOfBook.bookId) {
              author.books.push(book);
            }
          }
        }
      }
    }
    return authors;
  }
  private setAllAuthors(authors: Author[]): void {
    const authorsString = JSON.stringify(authors);
    localStorage.setItem('authors', authorsString);
  }

  private getMaxId(arrayId: ArrayWithId[]): number {
    return arrayId.reduce((previousValue, currentItem, index, arr) => {
      if (previousValue > currentItem.id) { return previousValue; }
      return currentItem.id;
    }, 0);
  }
  addAuthor(author: Author): Observable<Author> {
    const authors = this.getAllAuthors();
    author.id = this.getMaxId(authors) + 1;
    authors.unshift(author);
    this.setAllAuthors(authors);
    return of(author);
  }

  editAuthor(author: Author): Observable<Author> {
    const authors = this.getAllAuthors();
    let currentAuthor = this.getAuthor(authors, author.id);
    currentAuthor = { ...currentAuthor, ...author };
    this.setAllAuthors(authors);
    return of(currentAuthor);
  }

  deleteAuthor(author: Author): Observable<Author> {
    const authors = this.getAllAuthors();
    const deletedIndex = this.getAuthorIndex(authors, author.id);
    authors.splice(deletedIndex, 1);
    this.setAllAuthors(authors);
    return of(author);
  }

  private getAuthor(authors: Author[], id: number): Author {
    for (const a of authors) {
      if (a.id === id) {
        return a;
      }
    }
    throw new Error('Автор с id = ${author.id} не найден.');
  }
  private getAuthorIndex(authors: Author[], id: number): number {
    for (let index = 0; index < authors.length; index++) {
      if (authors[index].id === id) {
        return index;
      }
    }
    throw new Error('Автор с id = ${author.id} не найден.');
  }


  getBooks(): Observable<Book[]> {
    return of(this.getAllBooks());
  }
  private getAllBooks(): Book[] {
    const authorsString = localStorage.getItem('authors');
    const booksString = localStorage.getItem('books');
    const authorOfBookString = localStorage.getItem('author-of-book');

    const authors = JSON.parse(authorsString);
    const books = JSON.parse(booksString);
    const authorOfBooks = JSON.parse(authorOfBookString);
    for (const book of books) {
      book.authors = [];
      for (const authorOfBook of authorOfBooks) {
        if (book.id === authorOfBook.bookId) {
          for (const author of authors) {
            if (author.id === authorOfBook.authorId) {
              book.authors.push(author);
            }
          }
        }
      }
    }
    return books;
  }
  private setAllBooks(books: Book[]): void {
    const booksString = JSON.stringify(books);
    localStorage.setItem('books', booksString);
  }

  addBook(book: Book): Observable<Book> {
    const books = this.getAllBooks();
    book.id = this.getMaxId(books) + 1;
    books.unshift(book);
    this.setAllBooks(books);
    return of(book);
  }

  editBook(book: Book): Observable<Book> {
    const books = this.getAllBooks();
    let currentBook = this.getBook(books, book.id);
    currentBook = { ...currentBook, ...book };
    this.setAllBooks(books);
    return of(currentBook);
  }

  deleteBook(book: Book): Observable<Book> {
    const books = this.getAllBooks();
    const deletedIndex = this.getBookIndex(books, book.id);
    books.splice(deletedIndex, 1);
    this.setAllBooks(books);
    return of(book);
  }

  private getBook(books: Book[], id: number): Book {
    for (const a of books) {
      if (a.id === id) {
        return a;
      }
    }
    throw new Error('Книга с id = ${book.id} не найдена.');
  }
  private getBookIndex(books: Book[], id: number): number {
    for (let index = 0; index < books.length; index++) {
      if (books[index].id === id) {
        return index;
      }
    }
    throw new Error('Книга с id = ${book.id} не найдена.');
  }

}
