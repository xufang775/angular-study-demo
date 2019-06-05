import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PeekABooComponent} from './peek-a-boo.component';
import {PeekABooParentComponent} from './peek-a-boo-parent.component';
import {InputFocusComponent} from './input-focus.component';
import {FormsModule} from '@angular/forms';
import {OnChangesComponent, OnChangesParentComponent} from './on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    InputFocusComponent,
    OnChangesComponent,OnChangesParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
