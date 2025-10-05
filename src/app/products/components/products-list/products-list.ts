import { Component, inject, OnInit } from '@angular/core';
import { ProductsStore } from '../../store/products.store';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss'
})
export class ProductsList implements OnInit {
  /**products = [
    {
      name: 'Pigeon Fuel Station Records Management App',
      about: 'A comprehensive solution for managing fuel station operations, including sales, inventory, and reporting.',
      features: [
        'Real-time sales and inventory tracking',
        'Automated daily and monthly reporting',
        'Multi-user access with role-based permissions',
        'Easy integration with accounting systems'
      ],
      link: '../product/1'
    },
    {
      name: 'Owl School Records Management App',
      about: 'A modern platform for managing student, staff, and academic records for schools of all sizes.',
      features: [
        'Centralized student and staff database',
        'Attendance and grade management',
        'Parent and teacher communication portal',
        'Customizable reporting tools'
      ],
      link: '../product/2'
    }
  ];**/

  public productsStore = inject(ProductsStore)
  ngOnInit() {
    this.productsStore.loadAll();
  }
}
