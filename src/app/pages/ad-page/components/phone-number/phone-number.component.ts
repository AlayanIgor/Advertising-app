import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent {
  @Output() hidePhoneNumber = new EventEmitter();
  hidePhone() {
    this.hidePhoneNumber.emit();
  }
}
