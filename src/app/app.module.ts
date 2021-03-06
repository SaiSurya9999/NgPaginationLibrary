import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgconfSearchModule} from 'ngconf-search';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgconfPaginationModule} from 'ngconf-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatorPipe } from './paginator.pipe';
import { PageControlsComponent } from './page-controls/page-controls.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    //PaginatorPipe,
  // PageControlsComponent,
   SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgconfSearchModule,
    FormsModule,
    HttpClientModule,
    NgconfPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
