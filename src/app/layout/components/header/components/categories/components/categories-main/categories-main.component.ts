import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories-main',
  templateUrl: './categories-main.component.html',
  styleUrls: ['./categories-main.component.scss'],
})
export class CategoriesMainComponent {
  @Input() currentCategory!: any;
  @Input() selectedCategory!: any;
  @Output() chosedCategory = new EventEmitter();

  selectCategory(id: string) {
    this.chosedCategory.emit(id);
  }
}
