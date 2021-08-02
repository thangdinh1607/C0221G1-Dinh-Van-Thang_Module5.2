import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import {CategoryListComponent} from './category-list/category-list.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryCreateComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
