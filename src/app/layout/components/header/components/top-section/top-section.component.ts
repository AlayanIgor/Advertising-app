import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth-service/auth.service';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
})
export class TopSectionComponent implements OnInit {
  @Input() hideCategories!: boolean;

  login!: any;
  showUserNavigate = false;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.isLoggedOn$.subscribe((value) => {
      this.login = value;
    });
  }

  showNavigate() {
    this.showUserNavigate = !this.showUserNavigate;
  }

  logout() {
    this._authService.logout();
    this.showUserNavigate = false;
  }
}
