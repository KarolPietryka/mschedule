import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPage } from './career-page.component';

describe('CareerPageComponent', () => {
  let component: CareerPage;
  let fixture: ComponentFixture<CareerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
