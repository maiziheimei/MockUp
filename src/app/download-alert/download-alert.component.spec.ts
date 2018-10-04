import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAlertComponent } from './download-alert.component';

describe('DownloadAlertComponent', () => {
  let component: DownloadAlertComponent;
  let fixture: ComponentFixture<DownloadAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
