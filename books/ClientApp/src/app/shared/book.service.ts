import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Author } from './author';
import { Book } from './book';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private storageService: StorageService) { }

  list(): Observable<Book[]> {
    return this.storageService.getBooks();
  }

  // добавление автора
  add(book: Book): Observable<Book> {
    return this.storageService.addBook(book);
  }

  // редактирование автора
  edit(book: Book): Observable<Book> {
    return this.storageService.editBook(book);
  }

  // удаление автора
  delete(book: Book): Observable<Book> {
    return this.storageService.deleteBook(book);
  }
}
