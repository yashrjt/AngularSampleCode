import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
    {path:'',component:ProductListComponent,
    children:[
        {path:'search',component:ProductSearchComponent},
        {path:'detail',component:ProductDetailComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
