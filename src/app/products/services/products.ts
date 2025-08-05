import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly http = inject(HttpClient);

  /**
   * 
   * @returns 
   */
  async getAll(): Promise<Product[]> {
    return firstValueFrom(
      this.http.get<Product[]>(`/products.json`).pipe(

      )
    );
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async getByID(id: string): Promise<Product | undefined> {
    const products = await this.getAll();
    return products.find(product => product.link.replace(/\s+/g, '-').toLowerCase() === id.toLowerCase())
  }
  
}
