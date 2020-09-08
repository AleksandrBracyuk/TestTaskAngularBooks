import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Author } from './author';
import { Book } from './book';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private storageService: StorageService) { }

  list(): Observable<Author[]> {
    return this.storageService.getAuthors();
  }

  // добавление автора
  add(author: Author): Observable<Author> {
    return this.storageService.addAuthor(author);
  }

  // редактирование автора
  edit(author: Author): Observable<Author> {
    return this.storageService.editAuthor(author);
  }

  // удаление автора
  delete(author: Author): Observable<Author> {
    return this.storageService.deleteAuthor(author);
  }
}
