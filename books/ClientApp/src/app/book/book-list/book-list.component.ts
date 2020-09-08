import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';
import { Observable } from 'rxjs';
import { BookService } from '../../shared/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<Book[]>;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

}
