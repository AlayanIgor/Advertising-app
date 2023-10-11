import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';
import { CategoriesService } from 'src/app/core/services/categories-service/categories.service';
import { MyCategory } from 'src/app/core/services/categories-service/inretfaces/category.interface';
import { CategoryById } from 'src/app/core/services/categories-service/inretfaces/categoryById.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Output() hidingCategories = new EventEmitter();
  categories: MyCategory[] = [];

  selectedCategory!: string;

  selectedChildCategory!: string;

  currentCategory: CategoryById[] = [];

  constructor(
    private _categoriesService: CategoriesService,
    private _advertService: AdvertService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._categoriesService.getAllCategories().subscribe((categories: any) => {
      this.categories = categories.childs;
      this.selectCategory(this.categories[0]);
    });
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
    this.currentCategory = [];
    this._categoriesService
      .getCategoryById(category.id)
      .subscribe((category: any) => {
        category.childs.map((childCategory: any) => {
          this._categoriesService
            .getCategoryById(childCategory.id)
            .subscribe((chidlOfChildCategory: any) => {
              this.currentCategory.push(chidlOfChildCategory);
            });
        });
      });
  }
  searchCategory(id: string) {
    this._advertService.searchByCategory(id);
    this._router.navigate(['/search']);
    this.hidingCategories.emit();
  }
}
