import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdsPageComponent } from './my-ads-page.component';

describe('MyAdsPageComponent', () => {
  let component: MyAdsPageComponent;
  let fixture: ComponentFixture<MyAdsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAdsPageComponent]
    });
    fixture = TestBed.createComponent(MyAdsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
