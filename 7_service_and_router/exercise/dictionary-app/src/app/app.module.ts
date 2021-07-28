import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictionaryPageComponentComponent } from './dictionary-page-component/dictionary-page-component.component';
import { DictionaryDetailComponentComponent } from './dictionary-detail-component/dictionary-detail-component.component';
import {AppRoutingModule} from './app-routing.module';
import { DictionaryAddnewComponent } from './dictionary-addnew/dictionary-addnew.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponentComponent,
    DictionaryDetailComponentComponent,
    DictionaryAddnewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
