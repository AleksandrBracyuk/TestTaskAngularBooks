import { AuthorDetailComponent } from './author/author-detail/author-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { GenreListComponent } from './genre/genre-list/genre-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authors',
    pathMatch: 'full',
  },
  { path: 'books', component: BookListComponent },

  { path: 'authors', component: AuthorListComponent },
  { path: 'new-author', component: AuthorDetailComponent },
  { path: 'author/:id', component: AuthorDetailComponent },

  { path: 'genres', component: GenreListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
