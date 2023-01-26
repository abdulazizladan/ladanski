import { DialogRef } from '@angular/cdk/dialog';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageViewComponent } from '../image-view/image-view.component';
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
      "thumbnail": "./assets/project_thumbnails/promon_thumbnail.svg",
      "description": "A simple project monitoring solution. It allows administrators to record and keep track of their organizations present and past projects",
      "stack": [
        "Angular", "NestJS", "PostgreSQL"
      ]
    },
    {
      "name": "ItSchool",
      "thumbnail": "./assets/project_thumbnails/itschool_thumbnail.svg",
      "description": "A simple school records management system that automates some school records processes.",
      "stack": [
        "Angular", "NestJS", "PostgreSQL"
      ]
    }
  ]

  images = [
    {
      "thumbnail": "./assets/thumbnails/Render_01.png",
      "url": "./assets/images/Render_01.png",
      "title": "Product render"
    },
    {
      "thumbnail": "./assets/thumbnails/quirky_hat.png",
      "url": "./assets/images/Funny.png",
      "title": "quirky hat"
    },
    {
      "thumbnail": "./assets/thumbnails/werewolf.png",
      "url": "./assets/images/Werewolf.png",
      "title": "Lapras"
    }
  ]

  constructor( private dialog: MatDialog) { }

  openProjectSummaryDialog() {
    this.dialog.open(ProjectSummaryComponent)
  }

  openImageView( image: string ): void {
    const dialogRef = this.dialog.open(ImageViewComponent, {
      data: image
    });

    dialogRef.afterClosed().subscribe()
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

}
