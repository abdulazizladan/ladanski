import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  blogs = [
    {
      title: 'How Digital Solutions Transform Small Businesses',
      excerpt: 'Discover how digital tools and strategies can help small businesses grow and compete in today\'s market.',
      category: 'Business',
      date: new Date(2024, 5, 10),
      image: 'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Digital+Transformation'
    },
    {
      title: 'Top 5 Features Every School Management App Needs',
      excerpt: 'A breakdown of essential features for modern school management platforms to streamline operations.',
      category: 'Education',
      date: new Date(2024, 4, 22),
      image: 'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=School+App'
    },
    {
      title: 'Branding Tips for Startups in 2024',
      excerpt: 'Learn the latest branding strategies to help your startup stand out and attract loyal customers.',
      category: 'Branding',
      date: new Date(2024, 3, 15),
      image: 'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Branding+2024'
    },
    {
      title: 'Why Fuel Stations Need Digital Records',
      excerpt: 'Explore the benefits of digital record management for fuel stations and how it improves efficiency.',
      category: 'Business',
      date: new Date(2024, 2, 5),
      image: 'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Fuel+Station'
    }
  ];

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
  years = [0, 2024, 2023, 2022];

  search = '';
  selectedCategory = 'All';
  selectedMonth = 0;
  selectedYear = 0;

  get filteredBlogs() {
    return this.blogs.filter(blog => {
      const matchesSearch = this.search === '' || blog.title.toLowerCase().includes(this.search.toLowerCase()) || blog.excerpt.toLowerCase().includes(this.search.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || blog.category === this.selectedCategory;
      const matchesMonth = this.selectedMonth === 0 || (blog.date.getMonth() + 1) === this.selectedMonth;
      const matchesYear = this.selectedYear === 0 || blog.date.getFullYear() === this.selectedYear;
      return matchesSearch && matchesCategory && matchesMonth && matchesYear;
    });
  }
}
