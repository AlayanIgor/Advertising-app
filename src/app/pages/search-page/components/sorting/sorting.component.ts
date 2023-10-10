import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  @Input() findedAdverts!: number;
  @Output() sortingAdverts = new EventEmitter();
  sortedBy = [{ label: 'Новизне' }, { label: 'Дешевле' }, { label: 'Дороже' }];

  hideValues = true;
  selectedValue = 'Новизне';

  valueForRequest!: string;

  showValues() {
    this.hideValues = !this.hideValues;
  }

  putValue(i: number) {
    this.selectedValue = this.sortedBy[i].label;
    this.valueForRequest = this.sortedBy[i].label;
    this.showValues();
    this.sortingAdverts.emit(this.valueForRequest);
  }
}
