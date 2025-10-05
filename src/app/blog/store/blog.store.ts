import { Post } from "../models/post.model";
import { Injectable, signal } from '@angular/core';
import { BlogService } from '../services/blog';

export interface BlogState {
    posts: Post[];
    selectedPost: Post | null;
    loading: boolean;
    error: string | null;
}

@Injectable({ providedIn: 'root' })
export class BlogStore {
  private readonly blogService = new BlogService();

  state = signal<BlogState>({
    posts: [],
    selectedPost: null,
    loading: false,
    error: null
  });

  async loadAll() {
    this.state.update(s => ({ ...s, loading: true, error: null }));
    try {
      const posts = await this.blogService.getAll();
      this.state.update(s => ({ ...s, posts, loading: false }));
    } catch (error: any) {
      this.state.update(s => ({ ...s, error: error.message || 'Failed to load posts', loading: false }));
    }
  }

  async loadById(id: string) {
    this.state.update(s => ({ ...s, loading: true, error: null }));
    try {
      const post = await this.blogService.getByID(id);
      this.state.update(s => ({ ...s, selectedPost: post || null, loading: false }));
    } catch (error: any) {
      this.state.update(s => ({ ...s, error: error.message || 'Failed to load post', loading: false }));
    }
  }
}