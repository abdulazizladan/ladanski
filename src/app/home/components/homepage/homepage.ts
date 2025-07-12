import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
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
      quote: "Ladanski Solutions transformed our online presence! Their website design was phenomenal and delivered on time.",
      author: "Jane Doe, CEO of Stellar Innovations"
    },
    {
      quote: "The team at Ladanski helped us refine our product idea into a market-ready solution. Their consultancy was invaluable.",
      author: "John Smith, Founder of TechStart"
    },
    {
      quote: "Our brand identity has never been stronger. Ladanski Solutions truly understands how to make a business stand out.",
      author: "Emily White, Marketing Director at Global Corp"
    }
  ];
}
