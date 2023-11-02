import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../../urls/urls';

@Injectable({
  providedIn: 'root',
})
export class AddressApiService {
  token: string = 'aba6c749e48c9b5dbd5a7700affcbf5eda50dfdb';

  constructor(private _http: HttpClient, private _urls: Urls) {}

  getAddress(body: any) {
    return this._http.post(this._urls.daDataAddress, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
  }
}
