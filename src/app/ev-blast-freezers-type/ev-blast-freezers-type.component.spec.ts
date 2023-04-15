import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVBlastFreezersTypeComponent } from './ev-blast-freezers-type.component';

describe('EVBlastFreezersTypeComponent', () => {
  let component: EVBlastFreezersTypeComponent;
  let fixture: ComponentFixture<EVBlastFreezersTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVBlastFreezersTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EVBlastFreezersTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
