import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareStoryLineComponent } from './square-story.component';

describe('SquareStoryComponent', () => {
  let component: SquareStoryLineComponent;
  let fixture: ComponentFixture<SquareStoryLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareStoryLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareStoryLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
