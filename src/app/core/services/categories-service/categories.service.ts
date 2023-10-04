import { Injectable } from '@angular/core';
import { Category, MyCategory } from './inretfaces/category.interface';
import { CategoriesApiService } from './categories-api.service';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  myCategories: MyCategory[] = [];
  categories: MyCategory[] = [];

  constructor(private _categoriesApiService: CategoriesApiService) {}

  getCategoryById(id: string) {
    return this._categoriesApiService.getCategoryById(id);
  }

  getAllCategories() {
    this._categoriesApiService.getAllCategories().subscribe((categories) => {
      this.myCategories = categories;
      this.myCategories.map((category) => {
        if (category.parentId === '00000000-0000-0000-0000-000000000000') {
          this.categories.push(category);
        }
      });
    });
  }
}
