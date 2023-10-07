import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryById } from './inretfaces/categoryById.interface';
import { MyCategory } from './inretfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApiService {
  constructor(private _http: HttpClient) {}

  getAllCategories(): Observable<MyCategory[]> {
    return this._http.get<MyCategory[]>(`http://194.87.237.48:5000/Categories`);
  }

  getCategoryById(id: string) {
    return this._http.get<CategoryById>(
      `http://194.87.237.48:5000/Categories/${id}`
    );
  }
}
