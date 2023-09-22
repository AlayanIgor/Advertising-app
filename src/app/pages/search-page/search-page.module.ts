import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { AdModule } from 'src/app/shared/components/ad/ad.module';
import { SearchSidebarComponent } from './components/search-sidebar/search-sidebar.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { PriceFormComponent } from './components/search-sidebar/price-form/price-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchSidebarComponent,
    SortingComponent,
    PriceFormComponent,
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    ReactiveFormsModule,
    AdModule,
    FormsModule,
  ],
})
export class SearchPageModule {}
