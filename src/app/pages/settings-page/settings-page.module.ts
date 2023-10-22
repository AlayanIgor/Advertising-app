import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageRoutingModule } from './settings-page-routing.module';
import { SettingsPageComponent } from './settings-page.component';
import { LoginSettingsComponent } from './components/login-settings/login-settings.component';
import { PasswordSettingsComponent } from './components/password-settings/password-settings.component';


@NgModule({
  declarations: [
    SettingsPageComponent,
    LoginSettingsComponent,
    PasswordSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsPageRoutingModule
  ]
})
export class SettingsPageModule { }
