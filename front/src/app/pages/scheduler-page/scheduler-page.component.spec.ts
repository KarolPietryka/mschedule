import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerPage } from './scheduler-page.component';

describe('SchedulerPageComponent', () => {
  let component: SchedulerPage;
  let fixture: ComponentFixture<SchedulerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
