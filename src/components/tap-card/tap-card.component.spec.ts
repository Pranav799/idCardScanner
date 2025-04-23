import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapCardComponent } from './tap-card.component';

describe('TapCardComponent', () => {
  let component: TapCardComponent;
  let fixture: ComponentFixture<TapCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TapCardComponent]
    });
    fixture = TestBed.createComponent(TapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
