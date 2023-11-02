import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/user.interface';
import { SettingsValue } from './interfaces/settingsValue.interface';
import { Urls } from '../../urls/urls';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private _http: HttpClient, private _urls: Urls) {}

  getCurrentUser() {
    return this._http.get<User>(this._urls.currentUser);
  }

  changeCurrentUser(id: string, body: any) {
    return this._http.put(this._urls.changeUser + id, body);
  }
}
