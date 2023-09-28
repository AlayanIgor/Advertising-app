import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form!: FormGroup;
  error!: any;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.error$.subscribe((error) => {
      this.error = error;
    });
    this.form = new FormGroup({
      login: new FormControl('', [
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
    this._authService.login(formData);
    this.form.reset();
  }

  resetError() {
    this.error = '';
  }
}
