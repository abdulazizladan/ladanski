import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing-module';
import { ProductsList } from './components/products-list/products-list';
import { ProductDetails } from './components/product-details/product-details';


@NgModule({
  declarations: [
    ProductsList,
    ProductDetails
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
