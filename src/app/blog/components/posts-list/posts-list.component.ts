import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

  posts$: Observable<Post[]> | undefined;

  constructor( private blogService: BlogService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  ngOnDestroy(): void {

  }

  getPosts() {
    this.posts$ = this.blogService.getPosts()
  }

}
