import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BlogRoutingModule } from './blog-routing.module';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
