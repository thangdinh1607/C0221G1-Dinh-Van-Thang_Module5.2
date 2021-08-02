import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
      path: 'product',
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },
    {
      path: 'category',
      loadChildren: () => import('./category/category.module').then(c => c.CategoryModule)
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
