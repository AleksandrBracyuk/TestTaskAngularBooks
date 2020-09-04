import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';


@NgModule({
  declarations: [GenreListComponent, GenreDetailComponent],
  imports: [
    CommonModule,
    GenreRoutingModule
  ]
})
export class GenreModule { }
