import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-ad-page',
  templateUrl: './new-ad-page.component.html',
  styleUrls: ['./new-ad-page.component.scss'],
})
export class NewAdPageComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      // categoryId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      location: new FormControl('', [Validators.required]),
      images: new FormControl(''),
      cost: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
  }

  sumbit() {
    let formData = { ...this.form.value };
    this.form.reset();
  }
}
