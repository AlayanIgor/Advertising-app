import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser$ = new Subject();

  constructor(private _userApiService: UserApiService) {}

  getCurrentUser(id: string) {
    this._userApiService.getUserById(id).subscribe((user: any) => {
      this.currentUser$.next(user);
    });
  }
}
