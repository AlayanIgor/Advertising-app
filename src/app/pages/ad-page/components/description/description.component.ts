import {
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';
import { CurrentAdvert } from 'src/app/core/services/advert-service/interfaces/currentAdvert.interface';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements DoCheck {
  @Input() currentAdvert!: CurrentAdvert;
  @Output() showPhoneNumber = new EventEmitter();
  @Output() delete = new EventEmitter();
  showDeleteButton!: boolean;

  constructor(
    private _userService: UserService,
    private _advertService: AdvertService
  ) {}

  ngDoCheck(): void {
    if (this.currentAdvert.user.id === this._userService.currentUser.id) {
      this.showDeleteButton = true;
    }
  }

  showPhone() {
    this.showPhoneNumber.emit();
  }

  deleteAdvert() {
    if (this.currentAdvert.user.id === this._userService.currentUser.id) {
      this._advertService
        .deleteAdvert(this.currentAdvert.id)
        .subscribe((response: any) => {
          this.delete.emit(true);
        });
    }
  }
}
