import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories-service/categories.service';
import { MyCategory } from 'src/app/core/services/categories-service/inretfaces/category.interface';
import { CategoryById } from 'src/app/core/services/categories-service/inretfaces/categoryById.interface';

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

  constructor(private _categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this._categoriesService.getAllCategories().subscribe((categories: any) => {
      this.categories = categories.childs;
    });
    this.form = new FormGroup({
      categoryId: new FormControl(''),
      subCategoryId: new FormArray([]),
      childOfSubCategoryId: new FormArray([]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      location: new FormControl('', [Validators.required]),
      images: new FormControl(''),
      cost: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
      ]),
      phone: new FormControl('', [Validators.required]),
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

  sumbit() {
    let formValue = { ...this.form.value };
    if (this.currentSubCategory.childs.length) {
      let formData = {
        name: formValue.name,
        description: formValue.description,
        images: formValue.images,
        cost: formValue.cost,
        phone: formValue.phone,
        location: formValue.location,
        categoryId: formValue.childOfSubCategoryId[0],
      };
      console.log(formData);
    } else {
      let formData = {
        name: formValue.name,
        description: formValue.description,
        images: formValue.images,
        cost: formValue.cost,
        phone: formValue.phone,
        location: formValue.location,
        categoryId: formValue.subCategoryId[0],
      };
      console.log(formData);
    }

    // this.form.reset();
  }
}
