import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { LoginData } from './interfaces/loginData.interface';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedOn$ = new Subject();
  token!: string;
  error$ = new Subject();

  constructor(
    private _authApiService: AuthApiService,
    private _router: Router
  ) {}

  login(loginData: LoginData) {
    this._authApiService.login(loginData).subscribe(
      (response: any) => (
        (this.token = response),
        this.isLoggedOn$.next(true),
        this._router.navigate(['/main'])
      ),
      (error) => this.error$.next(error)
    );
  }

  logout() {
    this.isLoggedOn$.next(false);
  }
}
