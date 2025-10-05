import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home-routing-module').then(m => m.HomeRoutingModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  /**{
    path: 'services',
    component: Servicespage,
    pathMatch: 'full'
  },**/
  {
    path: 'services',
    loadChildren: () => import('./services/services-module').then(module => module.ServicesModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products-module').then(module => module.ProductsModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog-module').then(module => module.BlogModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact-module').then(module => module.ContactModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
