import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private _http: HttpClient) {}

  getUserById(id: string) {
    return this._http.get<User>(`http://194.87.237.48:5000/Users/${id}`);
  }
}
