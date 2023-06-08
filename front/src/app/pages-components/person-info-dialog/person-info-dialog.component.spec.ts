import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoDialog } from './person-info-dialog.component';

describe('PersonInfoDialogComponent', () => {
  let component: PersonInfoDialog;
  let fixture: ComponentFixture<PersonInfoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonInfoDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
