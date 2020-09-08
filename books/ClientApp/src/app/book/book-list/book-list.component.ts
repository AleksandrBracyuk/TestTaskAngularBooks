import { Book } from '../../shared/book';
import { BookService } from '../../shared/book.service';
import { Author } from '../../shared/author';
import { AuthorService } from '../../shared/author.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import {
  Component,
  OnInit, TemplateRef
} from '@angular/core';
import {
  Observable,
} from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<Book[]>;
  deletedItem: Book;
  modalRef: BsModalRef;
  constructor(private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.refresh();
  }


  refresh(): void {
    this.books = this.bookService.list();
  }

  add(): void {
    this.router.navigate(['/new-book']);
  }
  edit(id: number): void {
    this.router.navigate(['/book', id]);
  }

  openDeleteModal(item: Book, template: TemplateRef<any>): void {
    this.deletedItem = item;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirmDelete(): void {
    this.modalRef.hide();
    this.delete(this.deletedItem);
  }
  declineDelete(): void {
    this.modalRef.hide();
    this.deletedItem = null;
  }
  delete(book: Book): void {
    this.bookService.delete(book);
    this.refresh();
  }


}
