import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss'
})
export class ProductsList {
  products = [
    {
      name: 'Pigeon Fuel Station Records Management App',
      about: 'A comprehensive solution for managing fuel station operations, including sales, inventory, and reporting.',
      features: [
        'Real-time sales and inventory tracking',
        'Automated daily and monthly reporting',
        'Multi-user access with role-based permissions',
        'Easy integration with accounting systems'
      ],
      link: '#pigeon-details'
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
      link: '#owl-details'
    }
  ];
}
