import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { AuthPageComponent } from './auth-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegistrComponent } from './components/registr/registr.component';

@NgModule({
  declarations: [AuthPageComponent, AuthComponent, RegistrComponent],
  imports: [CommonModule, AuthPageRoutingModule],
})
export class AuthPageModule {}
