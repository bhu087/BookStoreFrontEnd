import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupEntryComponent } from './login-signup-entry.component';

describe('LoginSignupEntryComponent', () => {
  let component: LoginSignupEntryComponent;
  let fixture: ComponentFixture<LoginSignupEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignupEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
