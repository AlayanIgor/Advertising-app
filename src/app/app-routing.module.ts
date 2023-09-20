import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    title: 'Главная',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/main-page/main-page.module').then(
            (m) => m.MainPageModule
          ),
      },
      {
        path: 'ad/:id',
        loadChildren: () =>
          import('./pages/ad-page/ad-page.module').then((m) => m.AdPageModule),
      },
    ],
  },
  {
    path: 'new-ad',
    title: 'Новое объявление',
    loadChildren: () =>
      import('./pages/new-ad-page/new-ad-page.module').then(
        (m) => m.NewAdPageModule
      ),
  },
  {
    path: 'auth',
    title: 'Вход',
    loadChildren: () =>
      import('./pages/auth-page/auth-page.module').then(
        (m) => m.AuthPageModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
