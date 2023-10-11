import {
  Component,
  DoCheck,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { CategoriesService } from '../core/services/categories-service/categories.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements DoCheck {
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

  ngDoCheck(): void {
    this._categoriesService.hideCategories$.subscribe((value: any) => {
      if (!this.hideCategories) {
        this.hideCategories = value;
      }
    });
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
}
