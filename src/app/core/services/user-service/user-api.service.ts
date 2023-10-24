import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/user.interface';
import { SettingsValue } from './interfaces/settingsValue.interface';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private _http: HttpClient) {}

  getCurrentUser() {
    return this._http.get<User>('http://194.87.237.48:5000/Users/current');
  }

  changeCurrentUser(id: string, body: any) {
    return this._http.put(`http://194.87.237.48:5000/Users/${id}`, body);
  }
}
