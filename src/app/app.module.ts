import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OnlyYearMonthSelectModule} from './components/year-month/year-month.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    OnlyYearMonthSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
