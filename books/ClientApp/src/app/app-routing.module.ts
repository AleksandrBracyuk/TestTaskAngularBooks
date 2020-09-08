import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { GenreListComponent } from './genre/genre-list/genre-list.component';
import { GenreDetailComponent } from './genre/genre-detail/genre-detail.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full',
  },

  { path: 'general', component: GeneralComponent },

  { path: 'books', component: BookListComponent },
  { path: 'new-book', component: BookDetailComponent },
  { path: 'book/:id', component: BookDetailComponent },

  { path: 'authors', component: AuthorListComponent },
  { path: 'new-author', component: AuthorDetailComponent },
  { path: 'author/:id', component: AuthorDetailComponent },

  { path: 'genres', component: GenreListComponent },
  { path: 'new-genre', component: GenreDetailComponent },
  { path: 'genre/:id', component: GenreDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
