import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/core/services/categories-service/categories.service';
import { Category } from 'src/app/core/services/categories-service/inretfaces/category.interface';
import { CategoryById } from 'src/app/core/services/categories-service/inretfaces/categoryById.interface';

@Component({
  selector: 'app-new-ad-page',
  templateUrl: './new-ad-page.component.html',
  styleUrls: ['./new-ad-page.component.scss'],
})
export class NewAdPageComponent implements OnInit {
  form!: FormGroup;
  categories: Category[] = [];
  currentCategory!: CategoryById;

  constructor(private _categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories = this._categoriesService.categories;
    this.form = new FormGroup({
      categoryId: new FormControl(''),
      subCategoryId: new FormArray([]),
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
        this.currentCategory = category;
      });
  }

  addCategory() {
    setTimeout(() => {
      this.getSubCategoriesValues();
    });
    const control = new FormControl('', Validators.required);
    if ((this.form.get('subCategoryId') as FormArray).length < 1) {
      (this.form.get('subCategoryId') as FormArray).push(control);
    }
  }

  getControls() {
    return (this.form.get('subCategoryId') as FormArray).controls;
  }

  sumbit() {
    let formValue = { ...this.form.value };
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
    this.form.reset();
  }
}
