import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list.component';
import { stockInfoComponent } from './stock-info.component';


@NgModule({
  declarations: [
    AppComponent, StockListComponent, stockInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
