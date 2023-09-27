import { Component, Input, OnInit } from '@angular/core';

import { Advert } from 'src/app/core/services/advert-service/interfaces/advert.interface';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent {
  @Input() ad!: Advert;
}
