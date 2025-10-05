import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesList } from './components/services-list/services-list';
import { ServiceDetails } from './components/service-details/service-details';

const routes: Routes = [
  {
    path: '',
    component: ServicesList
  },
  {
    path: 'service/:id',
    component: ServiceDetails
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
