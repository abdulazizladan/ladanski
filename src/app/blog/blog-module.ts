import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { BlogRoutingModule } from './blog-routing-module';
import { Blog } from './components/blog/blog';
import { Post } from './components/post/post';


@NgModule({
  declarations: [
    Blog,
    Post
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
