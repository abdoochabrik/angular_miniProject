import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { AddNewsComponent } from './add-news/add-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { NewsListComponent } from './news-list/news-list.component';
import {ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AddNewsComponent,
    UpdateNewsComponent,
    NewsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
