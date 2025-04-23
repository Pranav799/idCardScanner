import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfullTapComponent } from './sucessfull-tap.component';

describe('SucessfullTapComponent', () => {
  let component: SucessfullTapComponent;
  let fixture: ComponentFixture<SucessfullTapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucessfullTapComponent]
    });
    fixture = TestBed.createComponent(SucessfullTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
