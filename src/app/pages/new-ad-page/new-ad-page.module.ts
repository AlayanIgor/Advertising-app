import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAdPageRoutingModule } from './new-ad-page-routing.module';
import { NewAdPageComponent } from './new-ad-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewAdPageComponent],
  imports: [
    CommonModule,
    NewAdPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class NewAdPageModule {}
