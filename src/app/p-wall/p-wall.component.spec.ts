import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PWallComponent } from './p-wall.component';

describe('PWallComponent', () => {
  let component: PWallComponent;
  let fixture: ComponentFixture<PWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
