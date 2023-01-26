import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { BlogRoutingModule } from './blog-routing.module';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { StoreModule } from '@ngrx/store';
import { PostsReducer, postsFeatureKey } from './store/posts.reducer';


@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature( postsFeatureKey, PostsReducer ),
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
