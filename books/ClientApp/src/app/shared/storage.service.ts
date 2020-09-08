import { Injectable } from '@angular/core';
import { Author } from './author';
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
    const authors = JSON.parse(authorsString);
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

}
