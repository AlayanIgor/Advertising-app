import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Observable, Subject } from 'rxjs';
import { User } from './interfaces/user.interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  sessionStorageUserKey = 'userKey';
  currentUser$ = new Subject();
  currentUser!: User;
  currentUserAdverts$ = new Subject();

  constructor(private _userApiService: UserApiService) {}

  getCurrentUser(token: string) {
    setTimeout(() => {
      this._userApiService.getCurrentUser(token).subscribe((user: any) => {
        sessionStorage.setItem(
          this.sessionStorageUserKey,
          JSON.stringify(user)
        );
      });
    }, 100);
  }

  getMyAdverts() {
    this.currentUserAdverts$.next(this.currentUser.adverts);
  }
}
