import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog } from './components/blog/blog';
import { Post } from './components/post/post';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: Blog
  },
  {
    path: 'post/:id',
    component: Post
  },
  {
    path: '**',
    redirectTo: 'posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
