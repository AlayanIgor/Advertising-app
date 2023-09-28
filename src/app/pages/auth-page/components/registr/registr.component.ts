import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss'],
})
export class RegistrComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(64),
        Validators.required,
      ]),
      name: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(64),
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.required,
      ]),
    });
  }

  sumbit() {
    let formData = { ...this.form.value };
    console.log(formData);
    this.form.reset();
  }
}
