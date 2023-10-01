import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Subject } from 'rxjs';
import { User } from './interfaces/user.interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser$ = new Subject();
  currentUserObj!: User;

  constructor(private _userApiService: UserApiService) {}

  getCurrentUser(token: string) {
    this._userApiService.getCurrentUser(token).subscribe((user: any) => {
      this.currentUser$.next(user), (this.currentUserObj = user);
      (error: any) => {
        console.log(error);
      };
    });
  }
}
