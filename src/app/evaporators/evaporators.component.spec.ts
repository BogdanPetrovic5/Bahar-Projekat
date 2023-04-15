import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaporatorsComponent } from './evaporators.component';

describe('EvaporatorsComponent', () => {
  let component: EvaporatorsComponent;
  let fixture: ComponentFixture<EvaporatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaporatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaporatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
