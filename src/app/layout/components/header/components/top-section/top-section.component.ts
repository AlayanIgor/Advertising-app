import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';

import { AuthService } from 'src/app/core/services/auth-service/auth.service';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
})
export class TopSectionComponent implements OnInit {
  @Input() hideCategories!: boolean;
  currentUser$ = new Subject();
  login!: any;
  showUserNavigate = false;
  constructor(
    private _authService: AuthService,
    private _userSevice: UserService,
    private _advertService: AdvertService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._authService.isLoggedOn$.subscribe((value) => {
      this.login = value;
    });
    this._userSevice.currentUser$.subscribe((user: any) => {
      let currentUserName = user.name;
      this.currentUser$.next(currentUserName);
    });
  }

  showNavigate() {
    this.showUserNavigate = !this.showUserNavigate;
  }

  showMyAdverts() {
    this._advertService.getMyAdverts();
  }

  logout() {
    this._authService.logout();
    this.showUserNavigate = false;
    this._advertService.getAllAdverts();
    this._router.navigate(['/main']);
  }
}
