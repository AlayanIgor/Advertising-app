import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories-sidebar',
  templateUrl: './categories-sidebar.component.html',
  styleUrls: ['./categories-sidebar.component.scss'],
})
export class CategoriesSidebarComponent {
  @Input() categories!: any;
  @Output() selectCategory = new EventEmitter();

  chooseCategory(category: any) {
    this.selectCategory.emit(category);
  }
}
