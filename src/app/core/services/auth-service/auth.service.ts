import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { LoginData } from './interfaces/loginData.interface';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RegistrData } from './interfaces/registrData.interface';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedOn$ = new Subject();
  token!: string;
  authError$ = new Subject();
  registrError$ = new Subject();
  registrSucces$ = new Subject();

  constructor(
    private _authApiService: AuthApiService,
    private _router: Router,
    private _userService: UserService
  ) {}

  registr(body: RegistrData) {
    this._authApiService.registration(body).subscribe(
      (response: any) => this.registrSucces$.next(response),
      (error: any) => this.registrError$.next(error)
    );
  }

  login(loginData: LoginData) {
    this._authApiService.login(loginData).subscribe(
      (response: any) => (
        (this.token = response),
        this.isLoggedOn$.next(true),
        this._router.navigate(['/main']),
        this._userService.getCurrentUser(this.token)
      ),
      (error) => this.authError$.next(error)
    );
  }

  logout() {
    this.isLoggedOn$.next(false);
    this.token = '';
  }
}
