import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss'],
})
export class RegistrComponent implements OnInit {
  form!: FormGroup;

  successfulRegistr!: any;
  error!: any;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.minLength(4),
        Validators.required,
      ]),
      name: new FormControl('', [Validators.minLength(4), Validators.required]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }

  sumbit() {
    let formData = { ...this.form.value };
    this._authService.registr(formData);
    this._authService.registrSucces$.subscribe((value) => {
      this.successfulRegistr = value;
    });
    this.form.reset();
  }

  resetEror() {
    this.error = '';
  }
}
