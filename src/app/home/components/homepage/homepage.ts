import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

  currentIndex: number = 0;
  
  services = [
    {
      name: 'Software Development',
      description: 'Crafting bespoke software solutions tailored to your unique business needs.',
      icon: '💻'
    },
    {
      name: 'Website Design',
      description: 'Creating stunning and responsive websites that captivate your audience.',
      icon: '🌐'
    },
    {
      name: 'Branding',
      description: 'Building strong and memorable brand identities that resonate with your customers.',
      icon: '🎨'
    },
    {
      name: 'Digital Marketing',
      description: 'Driving online visibility and growth through strategic digital campaigns.',
      icon: '📈'
    },
    {
      name: 'Consultancy',
      description: 'Providing expert guidance and insights to help your business thrive.',
      icon: '💡'
    },
    {
      name: 'Product Design',
      description: 'Designing intuitive and engaging products that solve real-world problems.',
      icon: '📱'
    },
  ];
  
  testimonials = [
    {
      quote: "Ladanski Solutions transformed our online presence completely. Their web development team delivered beyond our expectations with a site that's not only beautiful but also drives conversions.",
      author: "Alhaji Lawal Aliyu",
      position: "CEO, Zazzau Industrial Park"
    },
    {
      quote: "Working with Ladanski was a game-changer for our business. Their digital marketing strategy increased our leads by 150% in just three months. Highly recommend their services!",
      author: "Baba Bukar Isa",
      position: "Founder, Mai-Bor Engineering"
    }
  ];

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Ladanski Solutions | Software, Web, Branding, Digital Marketing');
    this.meta.addTags([
      { name: 'description', content: 'Ladanski Solutions offers bespoke software development, web design, branding, digital marketing, and consultancy to help your business thrive.' },
      { property: 'og:title', content: 'Ladanski Solutions | Software, Web, Branding, Digital Marketing' },
      { property: 'og:description', content: 'Ladanski Solutions offers bespoke software development, web design, branding, digital marketing, and consultancy to help your business thrive.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ladanski.com/' },
      { property: 'og:image', content: 'https://ladanski.com/logo.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Ladanski Solutions | Software, Web, Branding, Digital Marketing' },
      { name: 'twitter:description', content: 'Ladanski Solutions offers bespoke software development, web design, branding, digital marketing, and consultancy to help your business thrive.' },
      { name: 'twitter:image', content: 'https://ladanski.com/logo.png' }
    ]);
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
