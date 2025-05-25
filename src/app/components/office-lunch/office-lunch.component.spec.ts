import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeLunchComponent } from './office-lunch.component';

describe('OfficeLunchComponent', () => {
  let component: OfficeLunchComponent;
  let fixture: ComponentFixture<OfficeLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeLunchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
