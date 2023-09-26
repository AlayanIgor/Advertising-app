import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss'],
})
export class SearchSectionComponent {
  @Input() hideCategories!: boolean;
  @Output() categoriesShow = new EventEmitter();

  searchValue = '';

  constructor(private _advertService: AdvertService, private _router: Router) {}

  showCategories() {
    this.categoriesShow.emit();
  }

  search() {
    if (this.searchValue) {
      this._advertService.search(this.searchValue);
      this._router.navigate(['/search']);
      this.searchValue = '';
    }
  }

  setSearchValue(value: any) {
    this.searchValue = value.target.value;
  }
}
