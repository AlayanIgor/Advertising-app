import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAdPageComponent } from './new-ad-page.component';

const routes: Routes = [{ path: '', component: NewAdPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAdPageRoutingModule {}
