import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './home/components/homepage/homepage';
import { Servicespage } from './home/components/servicespage/servicespage';
import { Contactpage } from './home/components/contactpage/contactpage';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Homepage,
    pathMatch: 'full'
  },
  {
    path: 'services',
    component: Servicespage,
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products-module').then(module => module.ProductsModule),
    pathMatch: 'full'
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog-module').then(module => module.BlogModule),
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: Contactpage,
    pathMatch: 'full'
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
