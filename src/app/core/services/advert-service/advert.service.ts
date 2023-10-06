import { Injectable } from '@angular/core';
import { SearchRequest } from './interfaces/searchRequest.interface';
import { Advert } from './interfaces/advert.interface';
import { Subject } from 'rxjs';
import { AdvertApiService } from './advert-api.service';
import { UserService } from '../user-service/user.service';
import { User } from '../user-service/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertService {
  searchAdverts$ = new Subject();
  allAdverts$ = new Subject();
  myAdverts$ = new Subject();
  myAdvertsArray!: Advert[];
  searchValue!: string;
  valueOfSearch$ = new Subject();
  constructor(
    private _advertApiService: AdvertApiService,
    private _userService: UserService
  ) {}

  search(searchValue: string) {
    const searchRequest: SearchRequest = {
      search: searchValue,
      showNonActive: true,
    };
    this.valueOfSearch$.next(searchValue);
    this._advertApiService.getAdverts(searchRequest).subscribe((searchData) => {
      this.searchAdverts$.next(searchData);
    });
  }
  getAllAdverts() {
    const searchRequest: SearchRequest = {
      search: '',
      showNonActive: true,
    };
    this._advertApiService.getAdverts(searchRequest).subscribe((data) => {
      this.allAdverts$.next(data);
    });
  }

  getMyAdverts() {
    this.myAdverts$.next(this.myAdvertsArray);
  }
}
