import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressApiService {
  token: string = 'aba6c749e48c9b5dbd5a7700affcbf5eda50dfdb';

  constructor(private _http: HttpClient) {}

  getAddress(body: any) {
    return this._http.post(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      body,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      }
    );
  }
}
