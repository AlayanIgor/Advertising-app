import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAdsPageComponent } from './my-ads-page.component';
import { MyAdsPageRoutingModule } from './my-ads-page-routing.module';
import { AdModule } from 'src/app/shared/components/ad/ad.module';

@NgModule({
  declarations: [MyAdsPageComponent],
  imports: [CommonModule, MyAdsPageRoutingModule, AdModule],
})
export class MyAdsPageModule {}
