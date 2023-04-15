import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUIndustrialTypeComponent } from './cu-industrial-type.component';

describe('CUIndustrialTypeComponent', () => {
  let component: CUIndustrialTypeComponent;
  let fixture: ComponentFixture<CUIndustrialTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUIndustrialTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUIndustrialTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
