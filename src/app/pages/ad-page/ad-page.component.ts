import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.scss'],
})
export class AdPageComponent {
  showPhone = false;

  showPhoneNumber() {
    this.showPhone = true;
  }

  hidePhoneNumber() {
    this.showPhone = false;
  }
}
