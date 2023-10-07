import { Injectable } from '@angular/core';
import { SearchRequest } from './interfaces/searchRequest.interface';
import { HttpClient } from '@angular/common/http';
import { Advert } from './interfaces/advert.interface';
import { CurrentAdvert } from './interfaces/currentAdvert.interface';
import { SearchByCategoryRequest } from './interfaces/searchByCategoryRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertApiService {
  constructor(private _http: HttpClient) {}

  getAdverts(body: SearchRequest) {
    return this._http.post<Advert[]>(
      'http://194.87.237.48:5000/Advert/search',
      body
    );
  }

  getAdvertById(id: string) {
    return this._http.get<CurrentAdvert>(
      `http://194.87.237.48:5000/Advert/${id}`
    );
  }

  getAdvertsByCategory(body: SearchByCategoryRequest) {
    return this._http.post<Advert[]>(
      'http://194.87.237.48:5000/Advert/search',
      body
    );
  }
}
