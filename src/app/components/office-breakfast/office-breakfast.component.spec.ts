import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBreakfastComponent } from './office-breakfast.component';

describe('OfficeBreakfastComponent', () => {
  let component: OfficeBreakfastComponent;
  let fixture: ComponentFixture<OfficeBreakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeBreakfastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
