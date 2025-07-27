import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

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
    BlogRoutingModule,
    FlexLayoutModule
  ]
})
export class BlogModule { }
