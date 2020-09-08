import { AuthorModule } from './../author/author.module';
import { BookModule } from './../book/book.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';


@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule, AuthorModule, BookModule
  ]
})
export class GeneralModule { }
