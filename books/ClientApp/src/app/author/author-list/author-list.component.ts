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
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors: Observable<Author[]>;
  deletedItem: Author;
  modalRef: BsModalRef;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.authors = this.authorService.list();
  }

  add(): void {
    this.router.navigate(['/new-author']);
  }
  edit(id: number): void {
    this.router.navigate(['/author', id]);
  }

  openDeleteModal(item: Author, template: TemplateRef<any>): void {
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
  delete(author: Author): void {
    this.authorService.delete(author);
    this.refresh();
  }

}
