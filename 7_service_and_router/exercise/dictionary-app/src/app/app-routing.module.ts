import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {DictionaryPageComponentComponent} from './dictionary-page-component/dictionary-page-component.component';
import {DictionaryDetailComponentComponent} from './dictionary-detail-component/dictionary-detail-component.component';
import {DictionaryAddnewComponent} from './dictionary-addnew/dictionary-addnew.component';

const routes: Routes = [
  {path: '', component: DictionaryPageComponentComponent},
  {path: 'word/:word', component: DictionaryDetailComponentComponent},
  {path: 'create', component: DictionaryAddnewComponent},
];


@NgModule({
  declarations: [],
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
