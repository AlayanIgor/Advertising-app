import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/core/services/auth-service/auth-api.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss'],
})
export class RegistrComponent implements OnInit {
  form!: FormGroup;

  successfulRegistr!: any;
  error!: any;

  constructor(private _authApiService: AuthApiService) {}

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
    this._authApiService.registration(formData).subscribe(
      (response) => (this.successfulRegistr = response),
      (error) => (this.error = error)
    );
    this.form.reset();
  }

  resetEror() {
    this.error = '';
  }
}
