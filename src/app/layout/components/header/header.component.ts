import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() hideCategories!: boolean;
  @Output() categoriesShow = new EventEmitter();

  showCategories() {
    this.categoriesShow.emit();
  }
}
