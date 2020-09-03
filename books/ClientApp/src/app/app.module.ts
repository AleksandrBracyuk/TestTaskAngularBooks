import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ruLocale } from 'ngx-bootstrap/locale';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ToastaModule } from 'ngx-toasta';

defineLocale('ru', ruLocale);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    ToastaModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
