import {
  AfterContentInit,
  Component,
  DoCheck,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AddressService } from 'src/app/core/services/address-service/address.service';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';
import { CategoriesService } from 'src/app/core/services/categories-service/categories.service';
import { MyCategory } from 'src/app/core/services/categories-service/inretfaces/category.interface';
import { CategoryById } from 'src/app/core/services/categories-service/inretfaces/categoryById.interface';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-new-ad-page',
  templateUrl: './new-ad-page.component.html',
  styleUrls: ['./new-ad-page.component.scss'],
})
export class NewAdPageComponent implements OnInit {
  form!: FormGroup;
  categories: MyCategory[] = [];
  currentCategory!: CategoryById;
  currentCategory$ = new Subject();
  currentSubCategory!: CategoryById;
  currentSubCategory$ = new Subject();
  showSecondControl: boolean = true;
  images!: any;
  succesfullPosting!: any;
  error!: any;
  addressObj!: any;
  addressClues: any[] = [];
  autocompleteAddress!: boolean;

  constructor(
    private _categoriesService: CategoriesService,
    private _advertService: AdvertService,
    private _userService: UserService,
    private _router: Router,
    private _addressService: AddressService
  ) {}

  @ViewChild('addressInput') addressInput!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.addressInput.nativeElement.contains(event.target)) {
      this.autocompleteAddress = true;
      this.addressClues = [];
    }
  }

  ngOnInit(): void {
    this._categoriesService.getAllCategories().subscribe((categories: any) => {
      this.categories = categories.childs;
    });
    this.form = new FormGroup({
      categoryId: new FormControl(''),
      subCategoryId: new FormArray([]),
      childOfSubCategoryId: new FormArray([]),
      email: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', Validators.minLength(4)),
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      images: new FormControl(''),
      cost: new FormControl('', [
        Validators.maxLength(10),
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
      ]),
    });
  }

  getSubCategoriesValues() {
    this._categoriesService
      .getCategoryById(this.form.value.categoryId)
      .subscribe((category) => {
        this.currentCategory$.next(category);
      });
  }

  getChildOfSubCategoriesValues() {
    this._categoriesService
      .getCategoryById(this.form.value.subCategoryId[0])
      .subscribe((category: any) => {
        this.currentSubCategory$.next(category);
      });
  }

  addSubCategory() {
    setTimeout(() => {
      this.getSubCategoriesValues();
    });
    const control = new FormControl('', Validators.required);
    this.currentCategory$.subscribe((category: any) => {
      this.currentCategory = category;
      if ((this.form.get('subCategoryId') as FormArray).length < 1) {
        (this.form.get('subCategoryId') as FormArray).push(control);
      }

      this.showSecondControl = false;
    });
  }

  addChildOfSubCategory() {
    setTimeout(() => {
      this.getChildOfSubCategoriesValues();
    });
    const control = new FormControl('', Validators.required);
    this.currentSubCategory$.subscribe((category: any) => {
      this.currentSubCategory = category;
      if (
        (this.form.get('childOfSubCategoryId') as FormArray).length < 1 &&
        this.currentSubCategory.childs.length
      ) {
        (this.form.get('childOfSubCategoryId') as FormArray).push(control);
      }
      if (this.currentSubCategory.childs.length) {
        this.showSecondControl = true;
      }
      if (!this.currentSubCategory.childs.length) {
        this.showSecondControl = false;
      }
    });
  }

  getSubCategoryIdControls() {
    return (this.form.get('subCategoryId') as FormArray).controls;
  }

  getChildOfSubCategoryIdControls() {
    return (this.form.get('childOfSubCategoryId') as FormArray).controls;
  }

  onImageSelect(event: any) {
    this.images = event.target.files;
  }

  resetError() {
    this.error = '';
  }

  toMyAdverts() {
    this._router.navigate(['/my-ads']);
  }

  getAddress(address: any) {
    let addressObj = {
      query: address.target.value,
    };
    this._addressService
      .getAddress(JSON.stringify(addressObj))
      .subscribe((clues) => {
        this.addressObj = clues;
        this.addressClues = this.addressObj.suggestions;
      });
  }

  setAddress(i: number) {
    this.autocompleteAddress = false;
    this.form.controls['location'].setValue(this.addressClues[i].value);
  }

  sumbit() {
    let formValue = { ...this.form.value };
    if (this.currentSubCategory.childs.length) {
      let formObject = {
        name: formValue.name,
        description: formValue.description,
        cost: Number(formValue.cost).toFixed(2),
        email: formValue.email,
        phone: formValue.phone,
        location: formValue.location,
        categoryId: formValue.childOfSubCategoryId[0],
      };

      const formData = Object.entries(formObject).reduce(
        (fd, n) => (fd.append(...n), fd),
        new FormData()
      );

      if (this.images) {
        for (let image of this.images) {
          formData.append('images', image, image.name);
        }
      }

      this._advertService.addNewAdvert(formData).subscribe(
        (response) => (
          (this.succesfullPosting = response),
          this._userService.getCurrentUser()
        ),
        (error) => (this.error = error)
      );
    } else {
      let formObject = {
        name: formValue.name,
        description: formValue.description,
        cost: formValue.cost.toFixed(2),
        email: formValue.email,
        phone: formValue.phone,
        location: formValue.location,
        categoryId: formValue.subCategoryId[0],
      };

      const formData = Object.entries(formObject).reduce(
        (fd, n) => (fd.append(...n), fd),
        new FormData()
      );

      if (this.images) {
        for (let image of this.images) {
          formData.append('images', image, image.name);
        }
      }

      this._advertService.addNewAdvert(formData).subscribe(
        (response) => (
          (this.succesfullPosting = response),
          this._userService.getCurrentUser()
        ),
        (error) => (this.error = error)
      );
    }

    this.form.reset();
  }
}
