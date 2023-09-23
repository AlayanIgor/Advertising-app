import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  @Output() showPhoneNumber = new EventEmitter();

  showPhone() {
    this.showPhoneNumber.emit();
  }
}
