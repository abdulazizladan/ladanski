import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { ServicesRoutingModule } from './services-routing-module';
import { ServicesList } from './components/services-list/services-list';
import { ServiceDetails } from './components/service-details/service-details';


@NgModule({
  providers: [
    provideHttpClient()
  ],
  declarations: [
    ServicesList,
    ServiceDetails
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
