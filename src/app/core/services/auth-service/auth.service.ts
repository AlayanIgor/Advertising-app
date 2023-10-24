import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { LoginData } from './interfaces/loginData.interface';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { RegistrData } from './interfaces/registrData.interface';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sessionStorageTokenKey = 'tokenKey';
  sessionStorageLoginKey = 'loginKey';
  registrError$ = new Subject();
  registrSucces$ = new Subject();
  authError$ = new Subject();
  token!: string | null;
  isLoggedOn$ = new Subject();

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
        sessionStorage.setItem(this.sessionStorageTokenKey, response),
        sessionStorage.setItem(this.sessionStorageLoginKey, 'true'),
        this._userService.getCurrentUser(),
        this._router.navigate(['/main'])
      ),
      (error) => this.authError$.next(error)
    );
  }

  logout() {
    sessionStorage.setItem(this.sessionStorageLoginKey, '');
    sessionStorage.setItem(this.sessionStorageTokenKey, '');
    sessionStorage.setItem(this._userService.sessionStorageUserKey, '');
    this.isLoggedOn$.next('');
    this.token = '';
    this._userService.currentUser$.next('');
  }
}
