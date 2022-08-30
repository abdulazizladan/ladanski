import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(mod => mod.GalleryModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(mod => mod.ProjectsModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(mod =>mod.BlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
