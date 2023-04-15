import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSplitTypeHermaticTypeComponent } from './cu-split-type-hermatic-type.component';

describe('CUSplitTypeHermaticTypeComponent', () => {
  let component: CUSplitTypeHermaticTypeComponent;
  let fixture: ComponentFixture<CUSplitTypeHermaticTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUSplitTypeHermaticTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUSplitTypeHermaticTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
