import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  hideCategories = true;

  showCategories() {
    this.hideCategories = !this.hideCategories;
  }

  hideCategoriesBlock() {
    this.hideCategories = true;
  }
}
