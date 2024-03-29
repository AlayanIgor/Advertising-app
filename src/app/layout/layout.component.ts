import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CategoriesService } from '../core/services/categories-service/categories.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  hideCategories = true;

  constructor(private _categoriesService: CategoriesService) {}

  @ViewChild('categoriesBlock') categoriesBlock!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (
      !!this.categoriesBlock &&
      !this.categoriesBlock.nativeElement.contains(event.target)
    ) {
      this.hideCategories = true;
    }
  }

  showCategories() {
    if (!!this.hideCategories) {
      setTimeout(() => {
        this.hideCategories = !this.hideCategories;
      });
    } else {
      this.hideCategories = !this.hideCategories;
    }
  }

  hidingCategories() {
    this.hideCategories = true;
  }
}
