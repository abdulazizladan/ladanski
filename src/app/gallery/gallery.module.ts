import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    ImagesListComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
