import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  form!: FormGroup;

  successfulSetting!: any;
  error!: any;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(4), Validators.required]),
      login: new FormControl('', [
        Validators.minLength(4),
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }

  submit() {}
}
