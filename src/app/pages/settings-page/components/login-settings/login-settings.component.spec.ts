import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSettingsComponent } from './login-settings.component';

describe('LoginSettingsComponent', () => {
  let component: LoginSettingsComponent;
  let fixture: ComponentFixture<LoginSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSettingsComponent]
    });
    fixture = TestBed.createComponent(LoginSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
