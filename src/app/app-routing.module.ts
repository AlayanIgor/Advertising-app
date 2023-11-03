import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

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
    canActivate: [authGuard],
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
  {
    path: 'search',
    title: 'Поиск',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/search-page/search-page.module').then(
            (m) => m.SearchPageModule
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
    path: 'my-ads',
    title: 'Мои объявления',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/my-ads-page/my-ads-page.module').then(
        (m) => m.MyAdsPageModule
      ),
  },
  {
    path: 'settings',
    title: 'Настройки',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/settings-page/settings-page.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '/main',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
