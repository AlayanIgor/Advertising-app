import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from './interfaces/loginData.interface';
import { RegistrData } from './interfaces/registrData.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private _http: HttpClient) {}

  registration(body: RegistrData) {
    return this._http.post('http://194.87.237.48:5000/Auth/Register', body);
  }

  login(body: LoginData) {
    return this._http.post('http://194.87.237.48:5000/Auth/Login', body);
  }
}
