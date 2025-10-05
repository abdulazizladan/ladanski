import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogStore } from '../../store/blog.store';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  categories = ['All', 'Business', 'Education', 'Branding'];
  months = [
    { value: 0, label: 'All' },
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];
  years = [0, 2025, 2024, 2023, 2022];

  search = '';
  selectedCategory = 'All';
  selectedMonth = 0;
  selectedYear = 0;

  constructor(public blogStore: BlogStore) {}

  ngOnInit() {
    this.blogStore.loadAll();
  }

  get filteredBlogs() {
    const blogs = this.blogStore.state().posts;
    return blogs.filter(blog => {
      const matchesSearch = this.search === '' || blog.title.toLowerCase().includes(this.search.toLowerCase()) || blog.summary.toLowerCase().includes(this.search.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || (blog as any).category === this.selectedCategory;
      const date = new Date(blog.datePublished);
      const matchesMonth = this.selectedMonth === 0 || (date.getMonth() + 1) === this.selectedMonth;
      const matchesYear = this.selectedYear === 0 || date.getFullYear() === this.selectedYear;
      return matchesSearch && matchesCategory && matchesMonth && matchesYear;
    });
  }
}
