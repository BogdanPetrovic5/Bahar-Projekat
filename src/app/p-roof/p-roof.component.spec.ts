import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRoofComponent } from './p-roof.component';

describe('PRoofComponent', () => {
  let component: PRoofComponent;
  let fixture: ComponentFixture<PRoofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRoofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PRoofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
