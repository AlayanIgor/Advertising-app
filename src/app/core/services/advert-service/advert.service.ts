import { Injectable } from '@angular/core';
import { SearchRequest } from './interfaces/searchRequest.interface';
import { Advert } from './interfaces/advert.interface';
import { Subject } from 'rxjs';
import { AdvertApiService } from './advert-api.service';
import { UserService } from '../user-service/user.service';
import { User } from '../user-service/interfaces/user.interface';
import { SearchByCategoryRequest } from './interfaces/searchByCategoryRequest.interface';
import { NewAdvert } from './interfaces/newAdvert.interface';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdvertService {
  searchAdverts$ = new Subject();
  allAdverts$ = new Subject();
  searchValue!: string;
  valueOfSearch$ = new Subject();
  constructor(
    private _advertApiService: AdvertApiService,
    private _authService: AuthService
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

  searchByCategory(categoryId: string) {
    const searchRequest: SearchByCategoryRequest = {
      showNonActive: true,
      category: categoryId,
    };
    this._advertApiService
      .getAdvertsByCategory(searchRequest)
      .subscribe((searchData) => {
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

  addNewAdvert(newAdvertFormData: any) {
    return this._advertApiService.addNewAdvert(newAdvertFormData);
  }
}
