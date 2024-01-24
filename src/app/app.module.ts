import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CouchdbDemoComponent } from './couchdb-demo/couchdb-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';

import { AddBookComponent } from './book-list/add-book.component';
import { BookService } from './book.service';
import { BookSearchComponent } from './book-list/book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CouchdbDemoComponent,
    BookListComponent,AddBookComponent,BookSearchComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
