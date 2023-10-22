import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';
import { Advert } from 'src/app/core/services/user-service/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-my-ads-page',
  templateUrl: './my-ads-page.component.html',
  styleUrls: ['./my-ads-page.component.scss'],
})
export class MyAdsPageComponent implements OnInit {
  myAdverts: Advert[] = [];
  constructor(
    private _advertService: AdvertService,
    private _userService: UserService
  ) {}
  ngOnInit(): void {
    this._userService.getMyAdverts();
    if (this._userService.currentUserAdverts.length) {
      this.myAdverts = this._userService.currentUserAdverts;
    } else {
      this.ngOnInit();
    }
  }
}
