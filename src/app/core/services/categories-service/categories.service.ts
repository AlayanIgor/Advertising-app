import { Injectable } from '@angular/core';
import { MyCategory } from './inretfaces/category.interface';
import { CategoriesApiService } from './categories-api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  hideCategories$ = new Subject();
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
