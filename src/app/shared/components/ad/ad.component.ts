import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {
  @Input() ad!: any;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.ad);
  }
}
