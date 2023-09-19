import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './categories-page.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPageComponent,
    children: [{ path: ':id', component: CategoriesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
