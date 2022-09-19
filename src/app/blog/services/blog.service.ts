import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private http: HttpClient ) { }

  getPosts(): Observable<Post[]> {
    const url = "./assets/blog/posts.json"
    return this.http.get<Post[]>(url)
  }

  getPostByID (id: number ) {

  }
}
