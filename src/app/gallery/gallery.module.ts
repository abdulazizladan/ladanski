import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImageComponent } from './components/image/image.component';
import { StoreModule } from '@ngrx/store';
import * as fromGallery from './reducers';

@NgModule({
  declarations: [
    ImagesListComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GalleryRoutingModule,
    StoreModule.forFeature(fromGallery.galleryFeatureKey, fromGallery.reducers, { metaReducers: fromGallery.metaReducers })
  ]
})
export class GalleryModule { }
