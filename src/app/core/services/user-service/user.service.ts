import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser = {};

  constructor(private _userApiService: UserApiService) {}

  getCurrentUser(id: string) {
    this._userApiService.getUserById(id).subscribe((user: any) => {
      this.currentUser = user;
    });
  }
}
