import { Component, Input, OnInit } from '@angular/core';

class Project {
    "name": string;
    "thumbnail": string;
    "description": string;
    "stack": string[]
}

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {

  @Input() project: Project | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
