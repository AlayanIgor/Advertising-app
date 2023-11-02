import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryById } from './inretfaces/categoryById.interface';
import { MyCategory } from './inretfaces/category.interface';
import { Observable } from 'rxjs';
import { Urls } from '../../urls/urls';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApiService {
  constructor(private _http: HttpClient, private _urls: Urls) {}

  getAllCategories(): Observable<MyCategory[]> {
    return this._http.get<MyCategory[]>(this._urls.categories);
  }

  getCategoryById(id: string) {
    return this._http.get<CategoryById>(this._urls.categories + '/' + id);
  }
}
