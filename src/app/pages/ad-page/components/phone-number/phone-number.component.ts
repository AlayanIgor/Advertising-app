import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentAdvert } from 'src/app/core/services/advert-service/interfaces/currentAdvert.interface';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent {
  @Input() currentAdvert!: CurrentAdvert;
  @Output() hidePhoneNumber = new EventEmitter();
  hidePhone() {
    this.hidePhoneNumber.emit();
  }
}
