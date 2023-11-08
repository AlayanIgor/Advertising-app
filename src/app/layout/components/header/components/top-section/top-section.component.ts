import {
  Component,
  DoCheck,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
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
export class TopSectionComponent implements OnInit, DoCheck {
  @Input() hideCategories!: boolean;
  currentUser$ = new Subject();
  login!: any;
  showUserNavigate = false;
  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _advertService: AdvertService,
    private _router: Router
  ) {}

  @ViewChild('userNavigate') userNavigate!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (
      !!this.userNavigate &&
      !this.userNavigate.nativeElement.contains(event.target)
    ) {
      this.showUserNavigate = false;
    }
  }

  ngOnInit(): void {
    this._userService.currentUser$.subscribe((user: any) => {
      let currentUser = JSON.parse(user);
      let currentUserName = currentUser.name;
      this.currentUser$.next(currentUserName);
    });
    this._userService.currentUser$.subscribe((user: any) => {
      this._userService.currentUser = JSON.parse(user);
    });
    window.addEventListener('load', () => {
      if (sessionStorage.getItem(this._authService.sessionStorageLoginKey)) {
        // this._authService.isLoggedOn$.next(
        //   sessionStorage.getItem(this._authService.sessionStorageLoginKey)
        // );
        this._authService.isLoggedOn = !!sessionStorage.getItem(
          this._authService.sessionStorageLoginKey
        );
      }
      if (sessionStorage.getItem(this._authService.sessionStorageTokenKey)) {
        this._authService.token = sessionStorage.getItem(
          this._authService.sessionStorageTokenKey
        );
      }
      if (sessionStorage.getItem(this._userService.sessionStorageUserKey)) {
        this._userService.currentUser$.next(
          sessionStorage.getItem(this._userService.sessionStorageUserKey)
        );
      }
    });
  }

  ngDoCheck(): void {
    if (sessionStorage.getItem(this._authService.sessionStorageLoginKey)) {
      // this._authService.isLoggedOn$.next(
      //   sessionStorage.getItem(this._authService.sessionStorageLoginKey)
      // );
      this._authService.isLoggedOn = !!sessionStorage.getItem(
        this._authService.sessionStorageLoginKey
      );
    }
    if (sessionStorage.getItem(this._authService.sessionStorageTokenKey)) {
      this._authService.token = sessionStorage.getItem(
        this._authService.sessionStorageTokenKey
      );
    }
    if (sessionStorage.getItem(this._userService.sessionStorageUserKey)) {
      this._userService.currentUser$.next(
        sessionStorage.getItem(this._userService.sessionStorageUserKey)
      );
    }

    // this._authService.isLoggedOn$.subscribe((value) => {
    //   this.login = value;
    // });
    this.login = this._authService.isLoggedOn;
  }

  showNavigate() {
    if (!this.showUserNavigate) {
      setTimeout(() => {
        this.showUserNavigate = !this.showUserNavigate;
      });
    } else {
      this.showUserNavigate = !this.showUserNavigate;
    }
  }

  showMyAdverts() {
    this.showUserNavigate = false;
    this._router.navigate(['/my-ads']);
  }

  toSettingsPage() {
    this.showUserNavigate = false;
    this._router.navigate(['/settings']);
  }

  logout() {
    this._authService.logout();
    this.showUserNavigate = false;
    this._advertService.getAllAdverts();
    this._router.navigate(['/main']);
  }
}
