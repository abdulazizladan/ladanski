import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../services/service';

@Component({
  selector: 'app-services-list',
  standalone: false,
  templateUrl: './services-list.html',
  styleUrl: './services-list.scss'
})
export class ServicesList {
  services: any[] = [];

  constructor(private servicesService: Service, private router: Router) {}

  ngOnInit(): void {
    this.servicesService.getServices().subscribe((data) => {
      this.services = data;
    });
  }

  openDetails(serviceId: string): void {
    this.router.navigate(['services', 'service', serviceId]);
  }
}
