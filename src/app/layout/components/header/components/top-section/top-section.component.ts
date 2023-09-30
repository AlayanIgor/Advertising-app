import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth-service/auth.service';
import { User } from 'src/app/core/services/user-service/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
})
export class TopSectionComponent implements OnInit {
  @Input() hideCategories!: boolean;
  currentUser!: User;
  login!: any;
  showUserNavigate = false;
  constructor(
    private _authService: AuthService,
    private _userSevice: UserService
  ) {}

  ngOnInit(): void {
    this._authService.isLoggedOn$.subscribe((value) => {
      this.login = value;
    });
    // this._userSevice.currentUser$.subscribe((user: any) => {
    //   this.currentUser = user;
    // });
  }

  showNavigate() {
    this.showUserNavigate = !this.showUserNavigate;
  }

  logout() {
    this._authService.logout();
    this.showUserNavigate = false;
  }
}
