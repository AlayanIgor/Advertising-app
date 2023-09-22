import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.scss'],
})
export class SearchSidebarComponent {
  @Input() allCategories!: any;
  @Output() selectedCategory = new EventEmitter();
  showSubCategories(categoryIndex: number) {
    this.allCategories[categoryIndex].hide =
      !this.allCategories[categoryIndex].hide;
  }

  choosedCategory(selectedCategory: string) {
    this.selectedCategory.emit(selectedCategory);
  }
}
