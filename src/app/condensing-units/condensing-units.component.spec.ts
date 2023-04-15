import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondensingUnitsComponent } from './condensing-units.component';

describe('CondensingUnitsComponent', () => {
  let component: CondensingUnitsComponent;
  let fixture: ComponentFixture<CondensingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondensingUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondensingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
