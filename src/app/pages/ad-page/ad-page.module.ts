import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdPageRoutingModule } from './ad-page-routing.module';
import { AdPageComponent } from './ad-page.component';


@NgModule({
  declarations: [
    AdPageComponent
  ],
  imports: [
    CommonModule,
    AdPageRoutingModule
  ]
})
export class AdPageModule { }
