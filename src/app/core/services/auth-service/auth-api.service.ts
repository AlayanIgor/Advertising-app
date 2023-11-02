import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from './interfaces/loginData.interface';
import { RegistrData } from './interfaces/registrData.interface';
import { Urls } from '../../urls/urls';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private _http: HttpClient, private _urls: Urls) {}

  registration(body: RegistrData) {
    return this._http.post(this._urls.register, body);
  }

  login(body: LoginData) {
    return this._http.post(this._urls.login, body);
  }
}
