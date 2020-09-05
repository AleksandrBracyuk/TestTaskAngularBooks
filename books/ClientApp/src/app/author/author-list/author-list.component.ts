import { Author } from '../../shared/author';
import { AuthorService } from '../../shared/author.service';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  Observable,
  fromEvent,
  interval,
  merge,
  concat,
  noop,
  NEVER,
  of,
} from 'rxjs';
import {
  map,
  mapTo,
  scan,
  startWith,
  switchMap,
  mergeMap,
  tap,
  publish,
  refCount,
} from 'rxjs/operators';
import { buffer, filter, throttleTime } from 'rxjs/operators';


@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors: Observable<Author[]>;
  data: Observable<Date>;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authors = this.authorService.list();
    this.data = NEVER.pipe(startWith(new Date(2020, 0, 1, 0, 0, 0)));
  }

}
