import { Component } from '@angular/core';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss'],
})
export class PriceFormComponent {
  minPrice = 0;
  maxPrice = 0;

  incorrectValues = false;

  checkValues() {
    if (
      (this.minPrice === 0 && this.maxPrice === 0) ||
      this.minPrice < 0 ||
      this.maxPrice < 0 ||
      this.minPrice > this.maxPrice
    ) {
      this.incorrectValues = true;
      setTimeout(() => {
        this.incorrectValues = false;
      }, 2000);
    }
  }

  setMinPrice(event: any) {
    this.minPrice = event.target.value;
  }

  setMaxPrice(event: any) {
    this.maxPrice = event.target.value;
  }
}
