import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Advert } from 'src/app/core/services/advert-service/interfaces/advert.interface';
import { CurrentAdvert } from 'src/app/core/services/advert-service/interfaces/currentAdvert.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  @Input() currentAdvert!: CurrentAdvert;
  @Output() showPhoneNumber = new EventEmitter();

  showPhone() {
    this.showPhoneNumber.emit();
  }
}
