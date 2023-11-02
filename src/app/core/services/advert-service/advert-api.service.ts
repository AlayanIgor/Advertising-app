import { Injectable } from '@angular/core';
import { SearchRequest } from './interfaces/searchRequest.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Advert } from './interfaces/advert.interface';
import { CurrentAdvert } from './interfaces/currentAdvert.interface';
import { SearchByCategoryRequest } from './interfaces/searchByCategoryRequest.interface';
import { NewAdvert } from './interfaces/newAdvert.interface';
import { Urls } from '../../urls/urls';

@Injectable({
  providedIn: 'root',
})
export class AdvertApiService {
  constructor(private _http: HttpClient, private _urls: Urls) {}

  getAdverts(body: SearchRequest) {
    return this._http.post<Advert[]>(this._urls.searchAdverts, body);
  }

  getAdvertById(id: string) {
    return this._http.get<CurrentAdvert>(this._urls.advertById + id);
  }

  getAdvertsByCategory(body: SearchByCategoryRequest) {
    return this._http.post<Advert[]>(this._urls.searchAdverts, body);
  }

  addNewAdvert(body: any) {
    return this._http.post(this._urls.postAdvert, body);
  }

  deleteAdvert(id: string) {
    return this._http.delete(this._urls.advertById + id);
  }
}
