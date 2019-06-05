import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PeekABooComponent} from './peek-a-boo.component';
import {PeekABooParentComponent} from './peek-a-boo-parent.component';
import {InputFocusComponent} from './input-focus.component';
import {FormsModule} from '@angular/forms';
import {OnChangesComponent, OnChangesParentComponent} from './on-changes.component';
import {DoCheckComponent, DoCheckParentComponent} from './do-check.component';
import {AfterViewComponent, AfterViewParentComponent, ChildViewComponent} from './after-view.component';
import {AfterContentComponent, AfterContentParentComponent, ChildComponent} from './after-content.component';
import {SpyDirective} from './spy.directive';
import {SpyParentComponent} from './spy.component';
import {CounterParentComponent, MyCounterComponent} from './counter.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    InputFocusComponent,
    OnChangesComponent,OnChangesParentComponent,
    DoCheckComponent,DoCheckParentComponent,
    ChildViewComponent,AfterViewComponent,AfterViewParentComponent,
    ChildComponent,AfterContentComponent,AfterContentParentComponent,
    SpyDirective,SpyParentComponent,
    MyCounterComponent,CounterParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
