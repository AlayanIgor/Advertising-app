import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAdsPageComponent } from './my-ads-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyAdsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAdsPageRoutingModule {}
