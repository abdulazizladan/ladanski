import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogStore } from '../../store/blog.store';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute, public blogStore: BlogStore) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if(this.id) {
        this.blogStore.loadById(this.id);
      }
    });
  }
}
