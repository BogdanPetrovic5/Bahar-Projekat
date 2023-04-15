import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVStandardTypeComponent } from './ev-standard-type.component';

describe('EVStandardTypeComponent', () => {
  let component: EVStandardTypeComponent;
  let fixture: ComponentFixture<EVStandardTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVStandardTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EVStandardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
