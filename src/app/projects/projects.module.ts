import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectComponent } from './components/project/project.component';
import { StoreModule } from '@ngrx/store';
import * as fromProjects from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    ProjectsRoutingModule,
    StoreModule.forFeature(fromProjects.projectsFeatureKey, fromProjects.reducers, { metaReducers: fromProjects.metaReducers })
  ]
})
export class ProjectsModule { }
