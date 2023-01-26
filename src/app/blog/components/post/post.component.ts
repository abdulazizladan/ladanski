import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PostsState } from '../../store/posts.reducer';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: Observable<Post[]> | null = null;

  id: number = 0;

  constructor(
    private store: Store<{posts: PostsState}>,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
    this.post$ = this.store.select((state) => state.posts.posts)
    .pipe(
      filter(x => x[this.id - 1].id === this.id)
    );
    console.log(this.post$)
  }

}
