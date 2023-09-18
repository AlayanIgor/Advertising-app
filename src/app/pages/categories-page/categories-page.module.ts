import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesPageRoutingModule } from './categories-page-routing.module';
import { CategoriesPageComponent } from './categories-page.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [CategoriesPageComponent, CategoriesComponent],
  imports: [CommonModule, CategoriesPageRoutingModule],
})
export class CategoriesPageModule {}
