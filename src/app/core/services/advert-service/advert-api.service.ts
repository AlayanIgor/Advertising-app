import { Injectable } from '@angular/core';
import { SearchRequest } from './interfaces/searchRequest.interface';
import { HttpClient } from '@angular/common/http';
import { Advert } from './interfaces/advert.interface';

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
}
