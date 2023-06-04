import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsPage } from './downloads-page.component';

describe('DownloadsPageComponent', () => {
  let component: DownloadsPage;
  let fixture: ComponentFixture<DownloadsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
