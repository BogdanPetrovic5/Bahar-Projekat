import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVIndustrialTypeComponent } from './ev-industrial-type.component';

describe('EVIndustrialTypeComponent', () => {
  let component: EVIndustrialTypeComponent;
  let fixture: ComponentFixture<EVIndustrialTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVIndustrialTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EVIndustrialTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
