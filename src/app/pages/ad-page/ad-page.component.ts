import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';
import { Advert } from 'src/app/core/services/advert-service/interfaces/advert.interface';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.scss'],
})
export class AdPageComponent implements OnInit {
  showPhone = false;

  currentAdvert!: any;

  constructor(
    private _route: ActivatedRoute,
    private _advertService: AdvertService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentAdvert = this._advertService.getById(params['id']);
    });
  }

  showPhoneNumber() {
    this.showPhone = true;
  }

  hidePhoneNumber() {
    this.showPhone = false;
  }
}
