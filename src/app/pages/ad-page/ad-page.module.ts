import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdPageRoutingModule } from './ad-page-routing.module';
import { AdPageComponent } from './ad-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DescriptionComponent } from './components/description/description.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';


@NgModule({
  declarations: [
    AdPageComponent,
    GalleryComponent,
    DescriptionComponent,
    PhoneNumberComponent
  ],
  imports: [
    CommonModule,
    AdPageRoutingModule
  ]
})
export class AdPageModule { }
