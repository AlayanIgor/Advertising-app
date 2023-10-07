import { Component, DoCheck } from '@angular/core';
import { CategoriesService } from '../core/services/categories-service/categories.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements DoCheck {
  hideCategories = true;

  constructor(private _categoriesService: CategoriesService) {}

  ngDoCheck(): void {
    this._categoriesService.hideCategories$.subscribe((value: any) => {
      if (!this.hideCategories) {
        this.hideCategories = value;
      }
    });
  }

  showCategories() {
    this.hideCategories = !this.hideCategories;
  }

  hideCategoriesBlock() {
    this.hideCategories = true;
  }
}
