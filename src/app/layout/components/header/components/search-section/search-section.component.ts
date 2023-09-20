import { Component, EventEmitter, Input, Output } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss'],
})
export class SearchSectionComponent {
  @Input() hideCategories!: boolean;
  @Output() categoriesShow = new EventEmitter();

  showCategories() {
    this.categoriesShow.emit();
  }
}
