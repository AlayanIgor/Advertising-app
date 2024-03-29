import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';
import { CurrentAdvert } from 'src/app/core/services/advert-service/interfaces/currentAdvert.interface';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() currentAdvert!: CurrentAdvert;
  @Output() showPhoneNumber = new EventEmitter();
  @Output() delete = new EventEmitter();
  showDeleteButton!: boolean;
  isLoggedOn!: boolean | undefined;

  constructor(
    private _userService: UserService,
    private _advertService: AdvertService,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    // this._authService.isLoggedOn$.subscribe((isLoggedOn: any) => {
    //   this.isLoggedOn = isLoggedOn;

    // });
    this.isLoggedOn = this._authService.isLoggedOn;
    if (
      this.currentAdvert.user.id === this._userService.currentUser.id &&
      this.isLoggedOn
    ) {
      this.showDeleteButton = true;
    }
  }

  showPhone() {
    this.showPhoneNumber.emit();
  }

  deleteAdvert() {
    if (
      this.currentAdvert.user.id === this._userService.currentUser.id &&
      confirm('Удалить ?')
    ) {
      this._advertService
        .deleteAdvert(this.currentAdvert.id)
        .subscribe((response: any) => {
          this.delete.emit(true);
        });
      this._userService.getCurrentUser();
    }
  }
}
