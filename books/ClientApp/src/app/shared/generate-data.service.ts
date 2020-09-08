import { Injectable } from '@angular/core';
import { Author } from './author';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class GenerateDataService {
  constructor() { }

  getTestString(length: number): string {
    const vowels = 'AEIOUY';
    const consonants = 'BCDFGHJKLMNPQRSTVWXZ';
    let ret = '';
    for (let i = 0; i < length; i++) {
      let next = '';
      if (i % 2 === 0) {
        next = consonants[Math.floor(Math.random() * consonants.length)];
      } else {
        next = vowels[Math.floor(Math.random() * vowels.length)];
      }
      if (i > 0) {
        next = next.toLowerCase();
      }
      ret += next;
    }
    return ret;
  }
  getTestArray(array: any, length: number): any[] {
    const ret: any[] = [];
    const count = Math.floor(Math.random() * length) + 1;
    for (let i = 0; i < count; i++) {
      ret.push(array[Math.floor(Math.random() * array.length)]);
    }
    return ret;
  }
  // вписать тестовые данные в localstorage
  createTestData(): void {

    const genre: string[] = [];
    for (let g = 1; g < 12; g++) {
      genre.push(`Genre-${g}`);
    }

    const authors: Author[] = [];
    const books: Book[] = [];
    const authorOfBook: { authorId: number, bookId: number }[] = [];
    for (let i = 1; i < 5; i++) {
      const author = new Author();
      author.id = i;
      author.surname = this.getTestString(9); // `Surname-${i}`;
      author.name = this.getTestString(5); // `Name-${i}`;
      author.patronymic = this.getTestString(7); // `Patronymic-${i}`;
      author.dateBirth = new Date(1900 + Math.ceil(Math.random() * 105), 1, 1);
      author.books = [];
      authors.push(author);
      // console.log(i);
    }
    for (let j = 1; j < authors.length * 5 + 1; j++) {
      const book = new Book();
      book.id = j;
      book.title = `Title--${j}`;
      book.numberPages = j * 10;
      book.genre = this.getTestArray(genre, 3);
      book.authors = [];
      books.push(book);
      // console.log(j);
    }
    for (let i = 1; i < authors.length + 1; i++) {
      for (let j = (i - 1) * 5 + 1; j < (i - 1) * 5 + 6; j++) {
        // console.log(i, j);
        authorOfBook.push({ authorId: i, bookId: j });
        let count = Math.floor(Math.random() * 7);
        if (count > 3) { count = 0; }
        for (let k = 0; k < count; k++) {
          authorOfBook.push({ authorId: i, bookId: Math.ceil(Math.random() * (books.length - 1)) });
        }
      }
    }

    localStorage.setItem('authors', JSON.stringify(authors));
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('author-of-book', JSON.stringify(authorOfBook));
    localStorage.setItem('genre', JSON.stringify(genre));
  }
}
