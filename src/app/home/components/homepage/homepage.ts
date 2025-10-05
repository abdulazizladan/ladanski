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
      name: 'Bespoke Software Development',
      description: 'We engineer robust, scalable, and custom applications that streamline your operations and give you a competitive edge. From concept to deployment, we build the tools you need.',
      icon: '⚙️' // Represents engineering/custom work
    },
    {
      name: 'High-Impact Website & UX',
      description: 'Get a stunning, fast, and mobile-responsive website designed for conversions. We focus on intuitive User Experience (UX) to ensure your visitors stay and act.',
      icon: '✨' // Represents design/captivation
    },
    {
      name: 'Strategic Brand Identity',
      description: 'Beyond a logo, we craft a complete, cohesive brand identity—voice, visuals, and values—that builds trust and ensures instant recognition with your target audience.',
      icon: '💎' // Represents value/uniqueness
    },
    {
      name: 'Data-Driven Digital Marketing',
      description: 'We drive qualified traffic and growth through tailored campaigns (SEO, PPC, Social). Our focus is on measurable results that deliver a high Return on Investment (ROI).',
      icon: '🚀' // Represents growth/launch
    },
    {
      name: 'Fractional CTO/Consultancy',
      description: 'Gain expert, senior-level technical leadership and strategy without the full-time cost. We guide your technology decisions to maximize efficiency and minimize risk.',
      icon: '🧭' // Represents guidance/direction
    },
    {
      name: 'Engaging Product Design (UI/UX)',
      description: 'We design intuitive and delightful user interfaces (UI) and user experiences (UX) for digital products, ensuring they are not just beautiful, but truly solve user problems.',
      icon: '🎨' // Represents design/intuitiveness
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Modernize your backend with secure, scalable, and efficient cloud infrastructure (AWS, Azure, Google Cloud), ensuring stability and cost-effectiveness as you grow.',
      icon: '☁️' // Represents the cloud/backend
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
    },
    {
      quote: "Ladanski listened to us and ensured he created a website that captures the essence of our brand",
      author: "Yakubu Madaki",
      position: "CEO, Madaki Properties"
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
