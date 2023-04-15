import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSplitTypeScrollTypeComponent } from './cu-split-type-scroll-type.component';

describe('CUSplitTypeScrollTypeComponent', () => {
  let component: CUSplitTypeScrollTypeComponent;
  let fixture: ComponentFixture<CUSplitTypeScrollTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUSplitTypeScrollTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUSplitTypeScrollTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
