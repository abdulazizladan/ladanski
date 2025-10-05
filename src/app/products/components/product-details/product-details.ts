import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsStore } from '../../store/products.store';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {

  id: string | null = null;
  Array = Array;

  isString(value: any): value is string {
    return typeof value === 'string';
  }

  getSubheading(content: any): string {
    return content?.subheading || '';
  }

  getContent(content: any): string {
    return content?.content || '';
  }

  constructor(private route: ActivatedRoute, public productsStore: ProductsStore) {}

  ngOnInit(){
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
    if(this.id){
      this.productsStore.loadById(this.id)
    }
  })
  }

}
