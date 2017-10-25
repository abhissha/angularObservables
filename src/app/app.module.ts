import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AutoCompleteObservableComponent } from './auto-complete-observable/auto-complete-observable.component';
import { WikipediaService } from './auto-complete-observable/WikipediaService';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteObservableComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [
    WikipediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
