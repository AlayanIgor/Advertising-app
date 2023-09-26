import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  @Input() findedAdverts!: number;
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
  }
}
