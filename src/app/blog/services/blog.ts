import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly http = inject(HttpClient);
  
  async getAll(): Promise<Post[]> {
    return firstValueFrom(
      this.http.get<Post[]>(`/blog.json`)
    );
  }

  async getByID(id: string): Promise<Post | undefined> {
    const posts = await this.getAll();
    return posts.find(post => post.title.replace(/\s+/g, '-').toLowerCase() === id.toLowerCase());
  }
}
