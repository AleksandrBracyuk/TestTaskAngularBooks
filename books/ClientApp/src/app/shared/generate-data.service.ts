import { Injectable } from '@angular/core';
import { Author } from './author';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class GenerateDataService {
  constructor() { }

  // вписать тестовые данные в localstorage
  createTestData(): void {
    const genre: string[] = [];
    for (let g = 1; g < 4; g++) {
      genre.push(`Genre-${g}`);
    }

    const authors: Author[] = [];
    for (let i = 1; i < 30; i++) {
      const author = new Author();
      author.id = i;
      author.surname = `Surname-${i}`;
      author.name = `Name-${i}`;
      author.patronymic = `Patronymic-${i}`;
      author.dateBirth = new Date(1900 + i, 1, 1);
      author.bookList = [];
      for (let j = 1; j < 4; j++) {
        const book = new Book();
        book.id = 123 * i + j;
        book.title = `Title-${i}-${j}`;
        book.numberPages = i * 20 + j * 20;
        book.genre = genre[(10 * i + j) / genre.length];
        author.bookList.push(book);
      }
      authors.push(author);
    }

    localStorage.setItem('authors', JSON.stringify(authors));
    localStorage.setItem('genre', JSON.stringify(genre));
  }
}
