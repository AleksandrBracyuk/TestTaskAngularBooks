import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';

@NgModule({
  declarations: [GenreListComponent, GenreDetailComponent],
  imports: [CommonModule],
})
export class GenreModule {}
