import { Injectable } from '@angular/core';
import { AddressApiService } from './address-api.service';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private _addressApiService: AddressApiService) {}

  getAddress(address: any) {
    return this._addressApiService.getAddress(address);
  }
}
