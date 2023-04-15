import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSplitTypeSemiHermacticTypeComponent } from './cu-split-type-semi-hermactic-type.component';

describe('CUSplitTypeSemiHermacticTypeComponent', () => {
  let component: CUSplitTypeSemiHermacticTypeComponent;
  let fixture: ComponentFixture<CUSplitTypeSemiHermacticTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUSplitTypeSemiHermacticTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUSplitTypeSemiHermacticTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
