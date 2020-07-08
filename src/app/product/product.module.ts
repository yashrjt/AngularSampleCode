import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductDescriptionComponent}  from '../product/product-description/product-description.component';

import {ProductRoutingModule}  from '../product/product.routing.module';


@NgModule({
  declarations: [ProductListComponent, ProductSearchComponent, ProductDescriptionComponent,ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[ProductListComponent, ProductSearchComponent, ProductDetailComponent,ProductDescriptionComponent]
})
export class ProductModule { }
