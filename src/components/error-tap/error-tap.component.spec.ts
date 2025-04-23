import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTapComponent } from './error-tap.component';

describe('ErrorTapComponent', () => {
  let component: ErrorTapComponent;
  let fixture: ComponentFixture<ErrorTapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorTapComponent]
    });
    fixture = TestBed.createComponent(ErrorTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
