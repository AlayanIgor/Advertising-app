import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Observable, Subject } from 'rxjs';
import { Advert, User } from './interfaces/user.interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  sessionStorageUserKey = 'userKey';
  currentUser$ = new Subject();
  currentUser!: User;
  currentUserAdverts: Advert[] = [];

  constructor(private _userApiService: UserApiService) {}

  getCurrentUser() {
    setTimeout(() => {
      this._userApiService.getCurrentUser().subscribe((user: any) => {
        sessionStorage.setItem(
          this.sessionStorageUserKey,
          JSON.stringify(user)
        );
      });
    }, 100);
  }

  getMyAdverts() {
    this.currentUserAdverts = this.currentUser.adverts;
  }
}
