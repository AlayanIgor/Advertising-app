import { Component, DoCheck, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';
import { Advert } from 'src/app/core/services/advert-service/interfaces/advert.interface';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  allAdverts: Advert[] = [];
  showMyAdvertsPage = false;

  constructor(
    private _advertService: AdvertService,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this._advertService.getAllAdverts();
    this._advertService.allAdverts$.subscribe((adverts: any) => {
      this.allAdverts = adverts;
      this.showMyAdvertsPage = false;
    });
    this._userService.currentUserAdverts$.subscribe((adverts: any) => {
      this.allAdverts = adverts;
      this.showMyAdvertsPage = true;
    });
  }
}
