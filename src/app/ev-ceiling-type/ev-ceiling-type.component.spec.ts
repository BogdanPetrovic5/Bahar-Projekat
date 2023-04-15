import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVCeilingTypeComponent } from './ev-ceiling-type.component';

describe('EVCeilingTypeComponent', () => {
  let component: EVCeilingTypeComponent;
  let fixture: ComponentFixture<EVCeilingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVCeilingTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EVCeilingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
