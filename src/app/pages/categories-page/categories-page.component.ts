import { Component } from '@angular/core';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent {
  constructor(public categoriesService: CategoriesService) {}
}
