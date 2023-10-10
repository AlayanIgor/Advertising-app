import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdvertApiService } from 'src/app/core/services/advert-service/advert-api.service';
import { CurrentAdvert } from 'src/app/core/services/advert-service/interfaces/currentAdvert.interface';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.scss'],
})
export class AdPageComponent implements OnInit {
  showPhone = false;
  succesDelete!: any;
  currentAdvert!: CurrentAdvert;

  constructor(
    private _route: ActivatedRoute,
    private _advertApiService: AdvertApiService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._advertApiService.getAdvertById(params['id']).subscribe(
        (advert: any) => {
          this.currentAdvert = advert;
        },
        (error) => {
          this._router.navigate(['/main']);
        }
      );
    });
  }

  showDeleteMessage(response: any) {
    this.succesDelete = response;
  }

  showPhoneNumber() {
    this.showPhone = true;
  }

  hidePhoneNumber() {
    this.showPhone = false;
  }
}
