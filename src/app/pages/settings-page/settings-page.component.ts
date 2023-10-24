import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';
import { SettingsValue } from 'src/app/core/services/user-service/interfaces/settingsValue.interface';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  form!: FormGroup;

  successfullSetting!: any;
  error!: any;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _authService: AuthService
  ) {}

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

  toAuth() {
    this._router.navigate(['/auth']);
  }

  resetError() {
    this.error = '';
  }

  submit() {
    let formValue: SettingsValue = { ...this.form.value };
    const formData = Object.entries(formValue).reduce(
      (fd, n) => (fd.append(...n), fd),
      new FormData()
    );

    this._userService.changeCurrentUser(formData).subscribe(
      (response) => {
        this.successfullSetting = response;
      },
      (error) => {
        this.error = error;
      }
    );

    this._authService.logout();
  }
}
