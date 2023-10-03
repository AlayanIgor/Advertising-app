import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryById } from './inretfaces/categoryById.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApiService {
  constructor(private _http: HttpClient) {}

  getCategoryById(id: string) {
    return this._http.get<CategoryById>(
      `http://194.87.237.48:5000/Categories/${id}`
    );
  }
}
