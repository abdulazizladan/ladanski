import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../services/service';

@Component({
  selector: 'app-service-details',
  standalone: false,
  templateUrl: './service-details.html',
  styleUrl: './service-details.scss'
})
export class ServiceDetails {
  service: any | undefined;

  constructor(private route: ActivatedRoute, private servicesService: Service) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    if (id) {
      this.servicesService.getServiceById(id).subscribe((svc) => {
        this.service = svc;
      });
    }
  }
}
