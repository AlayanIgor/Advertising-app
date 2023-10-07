import { Injectable } from '@angular/core';
import { MyCategory } from './inretfaces/category.interface';
import { CategoriesApiService } from './categories-api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: MyCategory[] = [];

  constructor(private _categoriesApiService: CategoriesApiService) {}

  getCategoryById(id: string) {
    return this._categoriesApiService.getCategoryById(id);
  }

  getAllCategories() {
    this._categoriesApiService
      .getCategoryById('00000000-0000-0000-0000-000000000000')
      .subscribe((categories: any) => {
        this.categories = categories.childs;
      });
  }
}
