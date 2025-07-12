import { Component } from '@angular/core';

@Component({
  selector: 'app-servicespage',
  standalone: false,
  templateUrl: './servicespage.html',
  styleUrl: './servicespage.scss'
})
export class Servicespage {
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
}
