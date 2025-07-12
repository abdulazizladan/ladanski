import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeRoutingModule } from './home-routing-module';
import { Homepage } from './components/homepage/homepage';
import { Servicespage } from './components/servicespage/servicespage';
import { Contactpage } from './components/contactpage/contactpage';
import { Hero } from './components/home/hero/hero';
import { About } from './components/home/about/about';
import { WhatWeDo } from './components/home/what-we-do/what-we-do';
import { Testimonials } from './components/home/testimonials/testimonials';


@NgModule({
  declarations: [
    Homepage,
    Servicespage,
    Contactpage,
    Hero,
    About,
    WhatWeDo,
    Testimonials
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
