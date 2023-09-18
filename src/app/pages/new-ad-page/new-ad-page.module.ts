import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAdPageRoutingModule } from './new-ad-page-routing.module';
import { NewAdPageComponent } from './new-ad-page.component';


@NgModule({
  declarations: [
    NewAdPageComponent
  ],
  imports: [
    CommonModule,
    NewAdPageRoutingModule
  ]
})
export class NewAdPageModule { }
