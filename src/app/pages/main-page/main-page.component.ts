import { Component, DoCheck, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';
import { Advert } from 'src/app/core/services/advert-service/interfaces/advert.interface';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  allAdverts: Advert[] = [];
  showMyAdvertsPage = false;

  constructor(private _advertService: AdvertService) {}

  ngOnInit() {
    this._advertService.getAllAdverts();
    this._advertService.allAdverts$.subscribe((adverts: any) => {
      this.allAdverts = adverts;
      this.showMyAdvertsPage = false;
    });
    this._advertService.myAdverts$.subscribe((user: any) => {
      this.allAdverts = user.adverts;
      this.showMyAdvertsPage = true;
    });
  }
}
