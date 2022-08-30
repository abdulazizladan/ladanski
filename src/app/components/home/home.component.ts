import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectSummaryComponent } from '../project-summary/project-summary.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  skills = [
    {
      "icon": "public",
      "name": "web development"
    },
    {
      "icon": "palette",
      "name": "grapic design"
    },
    {
      "icon": "video_file",
      "name": 'motion graphics'
    },
    {
      "icon": "3d_rotation",
      "name": "3d modelling"
    }
  ]

  projects = [
    {
      "name": "ProMon",
      "description": "A simple project monitoring solution.",
      "stack": [
        "Angular", "NestJS", "PostgreSQL"
      ]
    }
  ]

  images = [
    {
      "url": "./assets/images/Funny.png",
      "title": "quirky hat"
    },
    {
      "url": "./assets/images/Werewolf.png",
      "title": "Werewolf"
    },
    {
      "url": "./assets/images/Lapras.png",
      "title": "Lapras"
    }
  ]

  constructor( private dialog: MatDialog) { }

  openProjectSummaryDialog() {
    this.dialog.open(ProjectSummaryComponent)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

}
