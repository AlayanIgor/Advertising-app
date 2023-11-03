import { Injectable } from '@angular/core';
import { CategoriesApiService } from './categories-api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _categoriesApiService: CategoriesApiService) {}

  getCategoryById(id: string) {
    return this._categoriesApiService.getCategoryById(id);
  }

  getAllCategories() {
    return this._categoriesApiService.getCategoryById(
      '00000000-0000-0000-0000-000000000000'
    );
  }
}
