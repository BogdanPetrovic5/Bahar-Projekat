import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFacadeComponent } from './p-facade.component';

describe('PFacadeComponent', () => {
  let component: PFacadeComponent;
  let fixture: ComponentFixture<PFacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFacadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
